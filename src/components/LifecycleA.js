import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Akshay'
      }
      console.log("This is a LifecycleA constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("This is a LifecycleA getDerivedStatefromProps")
        return null
    }

    componentDidMount() {
        console.log("This is a LifecycleA componentDidMount")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("This is a LifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("This is a LifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("This is a LifecycleA componentDidUpdate")
    }
    changeName = () => {
        this.setState({
            name: 'Aditya'
        })
    }
  render() {
      console.log("This is a LifecycleA render")
    return (<div>
        <h1>This is a Class Component created by {this.state.name}</h1>
        <LifecycleB />
        <button onClick={this.changeName}>Change Name</button>
        </div>);
  }
}

export default LifecycleA;
