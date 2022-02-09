import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentRegComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Akshay'
      }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Akshay'
            })
        }, 2000);
    }
  render() {
      console.log("ParentRegComp render")
    return (<div>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
    </div>);
  }
}

export default ParentRegComp;
