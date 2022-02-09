import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    
    
  render() {
      const { count, increaseCount } = this.props;
    return (<div>
        <button onClick={increaseCount}>Clicked {count} times</button>
    </div>)
  }
}

export default ClickCounterTwo;
