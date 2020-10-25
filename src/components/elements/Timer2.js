import { remove } from "lodash";
import React, { Component } from "react";
import header from "./layout/Header";
import ReactPlayer from "react-player";
import Image from './elements/Image';

class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      text: "Event Starting in:",
      secText: "seconds",
      Player: ReactPlayer,
      imgViewer: {Image},
    };
  }

  render() {
    if (this.state.count == 0) {
      console.log("Event Started");
      clearInterval(this.myInterval);
      this.state.text = "Event has Started!! ";
      this.state.secText = "";
      this.state.count = "";
      this.state.ReactPlayer = {};
     
    }else if(this.state.count > 0)
    {
      this.state.Image = {};
    }

    const { count, text, secText, Player, imgViewer } = this.state;
    return (
      <div>
        <h5>
          {text} {count} {secText}
        </h5>

        <Player
        url="https://youtu.be/P7d1H83IcjE"
        width={899}
        height={504}
        playing={false}
        controls={true}
      ></Player>;

        <Image
        src={require('./../assets/images/img.png')}
        alt="Open"
        width={500}
        height={100} >
        </Image>

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

export default Timer2;
