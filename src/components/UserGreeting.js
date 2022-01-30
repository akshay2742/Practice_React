import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    changeLogin(){
        this.setState((prevState) => ({
            isLoggedIn: true
        }))
    }
    
    changeLogout(){
        this.setState((prevState) => ({
            isLoggedIn: false
        }))
    }
  render() {
    let message;
    if (this.state.isLoggedIn) {
        message = <div>
            <h1>Welcome Akshay</h1>
            <button onClick={() => this.changeLogout()}>Log Out</button>
        </div>
    }
    else
    {
        message = <div>
            <h1>Welcome Guest</h1>
            <button onClick={() => this.changeLogin()}>Log Out</button>
        </div>
    }
    return message
  }
}

export default UserGreeting;
