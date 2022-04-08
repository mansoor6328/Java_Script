import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "kushal",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) { 
      console.log("LifecycleA shouldComponentUpdate");
      return true;
   }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
      console.log("LifecycleA getSnapshotBeforeUpdate");
      return null;
  }

  componentDidUpdate(prevProps, prevState) { 
      console.log("LifecycleA componentDidUpdate");
  } 

  changeState = () => {
        this.setState({
            name: 'darshan'
        })
  }
  render() {
    console.log("LifecycleA render method");
    return (
      <div>
        <div>LifecycleA</div>
    <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
