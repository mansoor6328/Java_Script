import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}>Hovered {count} Times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
