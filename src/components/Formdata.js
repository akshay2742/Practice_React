import React, { Component } from 'react'

class Formdata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: "none"
        }
    }
    changevalue(){
        let a=document.getElementById("formName").value
        this.setState((prevState) => ({
            value: a
        }),() => {console.log("Value of a ",this.state.value)})
    }
    
    render() {
        return (
            <div>
                <div>
                    <form>
                        <label>Enter a Number</label>
                        <input type="text" id='formName' onChange={() => this.changevalue()}></input>
                    </form>
                </div>
                <div>
                    <h1>Entered value is: {this.state.value}</h1>
                    {/* <button onClick={() => this.changevalue()}>Update</button> */}
                </div>
                
            </div>
        )
    }
}

export default Formdata
