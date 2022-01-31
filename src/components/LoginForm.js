import React, { Component } from 'react';

class LoginForm extends Component {

    constructor(props) {
      super(props)

      this.state = {
         name: "",
         password: ""
      }
    }
    

    submit(){
        let x = document.getElementById('form_name');
        let y = document.getElementById('form_password');
        let z = document.getElementById('heading')
        let q = document.getElementById('form')
        if (x.value == "" && y.value == "") {
            alert("Fill the boxes!!")
            z.style.display = "none"
            
        }
        else{
            this.setState({
                name: x.value,
                password: y.value
            })
           

        }
        
    }
    
  render() {
    return (<div>
        <form id='form'>
            <input type="text" id='form_name' placeholder='Enter Your Name'></input>
            <input type="password" id='form_password' placeholder='Enter Your Password'></input>
            <button type="button" onClick={() => this.submit()}>Submit</button>
            <h1 id='heading'>Name: {this.state.name} Password: {this.state.password}</h1>
        </form>
    </div>
    );
  }
}

export default LoginForm;
