import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
      increment = () => {
        this.setState(
          (prevState) => {
            return { count: prevState.count + 1 };
          },
          () => {
            console.log(this.state);
          }
        );
      };
  render() {
      const {count} = this.state;
    return (
      <div>
          <h1 onMouseOver={this.increment}>Hovered {count} Times</h1>
      </div>
    )
  }
}

export default HoverCounter