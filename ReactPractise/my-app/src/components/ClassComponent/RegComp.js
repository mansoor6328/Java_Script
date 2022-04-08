import React, { Component } from 'react'

class RegComp extends Component {
  render() {
      console.log('---------regular compoenent render-----------');
    return (
      <div>RegularComp {this.props.name}</div>
    )
  }
}

export default RegComp