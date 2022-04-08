import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "Welcome Message",
    };
  }

  changeMessage = () => {
    this.setState({
      message: "Bye Message",
    });
  };
  render() {
    console.log(this.props.value);
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
