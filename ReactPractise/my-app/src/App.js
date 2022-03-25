import React, { Component } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import ColourChange from "./components/ColourChange";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColourChange />
      </div>
    );
  }
}

export default App;
