import React, { Component } from 'react';

class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
      this.cbRef = null
      this.setcbRef = (element) => {
        this.cbRef = element
        }
    
        this.state = {
            name: ''
        }
    }
    
    changename = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }   
        // this.inputRef.current.focus();
    }
    changeHandler = (event) => {
        alert(this.cbRef.value)
        event.preventDefault()
    }
  render() {
    return (<form>
        <label>Enter your name</label>
        <input type="text" value={this.state.name} onChange={this.changename} ref={this.setcbRef}/>
        <button type="submit" onClick={this.changeHandler}>Click</button>
    </form>);
  }
}

export default RefDemo;
