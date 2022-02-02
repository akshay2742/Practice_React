import React, { Component } from 'react';

class RegComp extends Component {
  render() {
      console.log("RegComp render")
    return <div>This is a Regular component made by {this.props.name}</div>;
  }
}

export default RegComp;
