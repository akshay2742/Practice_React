import React, { Component } from 'react';
import withCounter from './withCounter';
import EnhancedComponent from './withCounter';

class ClickCount extends Component {
    

  render() {
    return (<div>
        <button onClick={this.props.increaseCount}>{this.props.name} Clicked {this.props.count} Times</button>
    </div>);
  }
}

export default withCounter(ClickCount,5);
