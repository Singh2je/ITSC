import React, { Component } from "react";
import { Link } from "react-router-dom";
import Groupbutton from './elements/ButtonGroup'

class NavLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showImg: true,
      count: 5,
      text: "",
      secText: "",
    };
  }

  render() {
    if (this.state.count == 0) {
      clearInterval(this.myInterval);
      this.state.show = true;
      this.state.showImg = false;
    }

    const { count, text, secText } = this.state;
    return (
      <div>
        <h5></h5>
        {this.state.showImg && <Box2 />}
        {this.state.show && <Box />}
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

class Box extends Component {
  state = {};
  render() {
    return (
      <div>
       
       <Groupbutton> <Link to="VEaas">VEaas</Link>
        
        <Link to="QA">QA </Link>
       <Link to="OCAT">OCAT</Link>
        <Link to="DevOps">DevOps</Link>
        </Groupbutton>
      </div>
    );
  }
}
class Box2 extends Component {
  state = {};
  render() {
    return <div>Nav bar is blocked, Wait 5 seconds lol</div>;
  }
}

export default NavLinks;
