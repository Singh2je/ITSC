import { remove } from "lodash";
import React, { Component } from "react";
import header from "./layout/Header";
import ReactPlayer from "react-player";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      text: "Event Starting in:",
      secText: "seconds",
    };
  }

  render() {
    if (this.state.count == 0) {
      console.log("Event Started");
      clearInterval(this.myInterval);
      this.state.text = "Event has Started!! ";
      this.state.secText = "";
      this.state.count = "";
      
    }

    const { count, text, secText } = this.state;
    return (
      <div>
        <h5>
          {" "}
          {text} {count} {secText}
        </h5>
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }, 1000);

    //Renders again after running did mount method
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;
