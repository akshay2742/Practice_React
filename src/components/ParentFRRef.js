import React, { Component } from 'react';
import FRInput from './FRInput';

class ParentFRRef extends Component {

    constructor(props) {
      super(props)
    
      this.FRRef = React.createRef();
    }
    
    clickHandler = () => {
        this.FRRef.current.focus();
    }
  render() {
    return (<div>
        <FRInput ref={this.FRRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
    </div>);
  }
}

export default ParentFRRef;
