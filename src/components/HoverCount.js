import React, { Component } from 'react';
import withCounter from './withCounter';
import EnhancedComponent from './withCounter';

class HoverCount extends Component {
  render() {
      const { count, increaseCount } = this.props;
    return (<div>
        <h2 onMouseOver={increaseCount}>Hover {count} times</h2>
    </div>);
  }
}

export default withCounter(HoverCount,10);
