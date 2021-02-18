import React from "react";
import Content from "./Content.js";
class ImportCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.array = [];
    this.state.currentValue = "";
    this.state.correctChar = 0;
    this.state.currentIndex = Math.floor(Math.random() * 4);
    this.state.formVisible = false;
    this.state.nextIndex = Math.floor(Math.random() * 4);
    this.state.highlightChar = -1;
    this.state.timeleft = 15000;
    this.handleLine = this.handleLine.bind(this);
    this.createform = this.createform.bind(this);
    this.startTime = this.startTime.bind(this);
  }
  handleLine() {
    this.setState({
      currentIndex: this.state.nextIndex,
      totalChar: this.state.totalChar + Content[this.state.currentIndex].length,
      nextIndex: Math.floor(Math.random() * 4),
    });
  }

  renderInput() {
    var classes = "py-3 px-4 w-full ";
    if (!this.state.formVisible) {
      classes = classes + "hidden ";
    }
    return (
      <input
        type="text"
        placeholder="next line!"
        value={this.state.currentValue}
        onChange={(e) => {
          var userString = e.target.value;

          if (
            userString[userString.length - 1] ===
            Content[this.state.currentIndex][userString.length - 1]
          ) {
            this.setState({
              currentValue: e.target.value,
              correctChar: this.state.correctChar + 1,
              highlightChar: userString.length - 1,
            });
          }
        }}
        className={classes}
        onKeyPress={(e) => {
          if (
            e.key === "Enter" &&
            this.state.highlightChar ===
              Content[this.state.currentIndex].length - 1
          ) {
            this.setState({
              currentValue: "",
              highlightChar: -1,
            });
            this.handleLine();
          }
        }}
      />
    );
  }
  renderScore() {
    return (
      <div>
        <p>Booyaa! Your final score is {this.state.correctChar} </p>
      </div>
    );
  }
  startTime() {
    this.setState({
      formVisible: true,
      correctChar: 0,
      currentValue: "",
      highlightChar: -1,
    });
    setTimeout(() => {
      this.setState({
        formVisible: false,
      });
      console.log(this.state.correctChar);
    }, 15000);
  }
  createform() {
    var classes = "py-3 px-4 w-full ";
    if (!this.state.formVisible) {
      classes = classes + "hidden ";
    }
    var firstHalf = Content[this.state.currentIndex].slice(
      0,
      this.state.highlightChar + 1
    );
    var secondHalf = Content[this.state.currentIndex].slice(
      this.state.highlightChar + 1,
      Content[this.state.currentIndex].length
    );
    console.log(secondHalf);
    return (
      <div>
        <p className={classes}>
          <span class="text-green-600">{firstHalf}</span>
          <span class="">{secondHalf}</span>
        </p>
        <p className={classes}>{Content[this.state.nextIndex]}</p>
        {this.renderInput()}
        <p>{this.state.timeleft}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.createform()}</div>
        <button onClick={this.startTime}>Let's do this</button>
        <p></p>
      </div>
    );
  }
}
export default ImportCode;
