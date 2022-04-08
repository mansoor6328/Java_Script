import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'hello'
      }
    }

    eventHandler = () => {
        this.setState({
            message : 'Bye'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button type='button' onClick={this.eventHandler}>Click</button>
      </div>
    )
  }
}
export default EventBind;