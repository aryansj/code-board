import React from "react";
import Content from "./Content.js";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Header from "./header.js";
import backgroundimg from "./background.jpg";
class ImportCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.array = [];
    this.state.currentValue = "";
    this.state.correctChar = 0;
    this.state.key = 1;
    this.state.currentIndex = Math.floor(Math.random() * 90);
    this.state.formVisible = false;
    this.state.nextIndex = Math.floor(Math.random() * 90);
    this.state.isPlaying = false;
    this.state.highlightChar = -1;
    this.state.timeleft = 10000;
    this.state.tries = 0;
    this.state.currentTimer = "";
    this.handleLine = this.handleLine.bind(this);
    this.createform = this.createform.bind(this);
    this.startTime = this.startTime.bind(this);
  }
  handleLine() {
    this.setState({
      currentIndex: this.state.nextIndex,
      totalChar: this.state.totalChar + Content[this.state.currentIndex].length,
      nextIndex: Math.floor(Math.random() * 90),
    });
  }

  renderInput() {
    var classes =
      "py-6 mt-6 mb-4 px-4container w-full text-left p-4  text-black font-mono text-2xl  ";
    if (!this.state.formVisible) {
      classes = classes;
    }
    return (
      <input
        type="text"
        placeholder="Type here!"
        spellcheck="false"
        value={this.state.currentValue}
        onChange={(e) => {
          if (this.state.formVisible) {
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
      <div class="font-mono border border-double border-4 p-4 m-4 border-black text-black bg-white 2border- rounded-md text-5xl">
        <p>
          {" "}
          Your.Deft[Digits] : &#123;
          {(this.state.correctChar / 30).toPrecision(2)}&#125;{" "}
        </p>
      </div>
    );
  }
  startTime() {
    clearTimeout(this.state.currentTimer);
    this.setState({
      formVisible: true,
      correctChar: 0,
      currentValue: "",
      currentIndex: Math.floor(Math.random() * 90),
      nextIndex: Math.floor(Math.random() * 90),
      highlightChar: -1,
      key: this.state.key + 1,
      tries: this.state.tries + 1,

      isPlaying: true,
    });
    this.state.isPlaying = true;
    this.state.currentTimer = setTimeout(() => {
      this.setState({
        formVisible: false,
        isPlaying: false,
      });
    }, 30000);
  }
  createform() {
    var classes =
      "py-3 px-4 text-mono ml-2 flex flex-col bg-gray-100 grid grid-cols-3 text-black ";
    if (!this.state.formVisible) {
      classes = classes;
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
      <div
        className={
          classes +
          "container w-2/3 border-double border-8 border-black rounded-lg"
        }
      >
        <div class="col-span-2">
          <p class="container w-full text-left p-4 font-mono text-3xl font-bold">
            <span class="text-green-700">{firstHalf}</span>
            <span class="">{secondHalf}</span>
          </p>
          <p class="text-left p-4 font-mono text-gray-500">
            {Content[this.state.nextIndex]}
          </p>
          {this.renderInput()}
        </div>
        <div class="col-span-1 flex flex-col mt-7 text-4xl font-mono items-center">
          <CountdownCircleTimer
            isPlaying={this.state.isPlaying}
            duration={30}
            key={this.state.key}
            size={200}
            strokeWidth={7}
            colors={[
              ["#000000", 0.33],
              ["#000000", 0.33],
              ["#000000", 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div class="text-center items-center flex flex-col overflow-hidden text-mono  text-white bg-green-200 h-screen">
        <Header />
        <div class=" w-full text-center  items-center flex flex-col container">
          {this.createform()}
        </div>
        <div class="text-center mb-5 items-center w-1/2 flex flex-col">
          <div class="mb-10">
            {this.state.tries && !this.state.formVisible
              ? this.renderScore()
              : ""}
          </div>
          <button
            class="block accent text-3xl font-mono m-3 text-center"
            style={{
              "--block-accent-color": "#f14668",
            }}
            onClick={this.startTime}
          >
            Take the test
          </button>
        </div>
      </div>
    );
  }
}
export default ImportCode;
