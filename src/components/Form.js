import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'React'
      }
    }
    
    ChangeUsername = (event) => {
    
        this.setState({
            username: event.target.value
        })
    }
    ChangeComments = event => {
        this.setState({
            comments: event.target.value
        })
    }
    ChangeTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }
    showInfo = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
    <form>
        <div>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.ChangeUsername} ></input>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.ChangeComments}></textarea>
            <select onChange={this.ChangeTopic}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
            <button type='submit' onClick={this.showInfo}>Submit</button>
        </div>
    </form>);
  }
}

export default Form;
