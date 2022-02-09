import React, { Component } from 'react';
import Input from './Input';

class ParentInput extends Component {

    constructor(props) {
      super(props)
    
      this.classRef = React.createRef()
    }
    
    changeHandler = () => {
        this.classRef.current.focusInput()
    }
  render() {
    return (<div>
        <Input ref={this.classRef} />
        <button onClick={this.changeHandler}>Focus</button>

    </div>);
  }
}

export default ParentInput;
