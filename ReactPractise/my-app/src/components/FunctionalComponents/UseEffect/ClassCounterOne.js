import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name :''
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() { 
      document.title = `you clicked ${this.state.count} times`
   }

   componentDidUpdate(prevProps, prevState) { 
       if(prevState.count !== this.state.count)
       console.log('Updating document title');
    document.title = `you clicked ${this.state.count} times`
   } 

  render() {
    return (
      <div>
          <input value={this.state.name} onChange={e => {this.setState({ name : e.target.value})}} />
        <button onClick={this.increment}>clicked {this.state.count} times</button>
      </div>
    );
  }
}

export default ClassCounterOne;
