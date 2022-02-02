import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name: 'Akshay'
      }
      console.log("This is a LifecycleB constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("This is a LifecycleB getDerivedStatefromProps")
        return null
    }
    
    componentDidMount() {
        console.log("This is a LifecycleB componentDidMount")
    }
    componentDidMount() {
        console.log("This is a LifecycleB componentDidMount")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("This is a LifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("This is a LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("This is a LifecycleB componentDidUpdate")
    }
    
  render() {
      console.log("This is a LifecycleB render")
    return (<div>
        <h1>This is Lifecycle B</h1>
        
        </div>);
  }
}

export default LifecycleB;
