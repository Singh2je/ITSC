
import React, { Component } from "react";
import ReactPlayer from "react-player";
class TimerVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showImg: true,
      count: 10,
      text: "",
      secText: "",
    };
  }

  render() {
    if (this.state.count == 0) {
      console.log("Event Started");
      clearInterval(this.myInterval);
      this.state.text = "";
      this.state.secText = "";
      this.state.count = "";
      this.state.show = true;
      this.state.showImg = false;
    }

    const { count, text, secText } = this.state;
    return (
      <div>
        <h5>
          {text}{secText}
        </h5>
        {this.state.showImg && <StaticVideo />}
        {this.state.show && <LiveVideo />}
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

class LiveVideo extends Component {
  state = {};
  render() {
    return (
      <div>
        <ReactPlayer
          url="https://youtu.be/P7d1H83IcjE"
          alt="Nature live video"
          width={899}
          height={504}
          playing={true}
          controls={true}
        ></ReactPlayer>
      </div>
    );
  }
}

class StaticVideo extends Component {
  state = {};
  render() {
    return (
      <div>
        <ReactPlayer
          url="https://youtu.be/-cMqr9HpZ-Y"
          alt="Static video"
          width={899}
          height={504}
          playing={false}
          controls={true}
        ></ReactPlayer>
      </div>
    );
  }
}


export default TimerVideo;
