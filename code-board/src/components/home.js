import React from "react";
import Content from "./Content.js";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import backgroundimg from "./background.jpg";
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
    this.state.isPlaying = false;
    this.state.highlightChar = -1;
    this.state.timeleft = 15000;
    this.state.tries = 0;
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
      tries: this.state.tries + 1,
    });
    this.state.isPlaying = true;
    setTimeout(() => {
      this.setState({
        formVisible: false,
        isPlaying: false,
      });
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
    return (
      <div className={classes}>
        <p className={classes}>
          <span class="text-indigo-500">{firstHalf}</span>
          <span class="">{secondHalf}</span>
        </p>
        <p className={classes}>{Content[this.state.nextIndex]}</p>
        {this.renderInput()}
        <CountdownCircleTimer
          isPlaying={this.state.isPlaying}
          duration={15}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    );
  }
  render() {
    return (
      <div class=" text-mono bg-black text-white h-screen">
        <div>{this.createform()}</div>
        <button class="block" onClick={this.startTime}>
          Let's go
        </button>
        {this.state.tries && !this.state.formVisible ? this.renderScore() : ""}
      </div>
    );
  }
}
export default ImportCode;
