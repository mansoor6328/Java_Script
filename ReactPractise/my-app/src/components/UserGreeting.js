import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
      return this.state.isLoggedIn && <div>LoggedIn</div>
    // return this.state.isLoggedIn ? <div>Logged In</div> : <div>Logged Out</div>;
  }
}

export default UserGreeting;
