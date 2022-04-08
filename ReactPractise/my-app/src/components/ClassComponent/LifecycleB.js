import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'kushal'
      }
      console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) { 
        console.log("LifecycleB shouldComponentUpdate");
        return true;
     }
  
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null;
    }
  
    componentDidUpdate(prevProps, prevState) { 
        console.log("LifecycleB componentDidUpdate");
    } 
  render() {
      console.log('LifecycleB render method')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB