import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
    static contextType = UserContext;
  render() {
    return (<div>
        <h2> ComponentE from {this.context}</h2>
        <ComponentF />
        </div>)
  }
}

export default ComponentE;
