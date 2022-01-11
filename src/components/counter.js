import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    autoincrement(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }),() => {console.log(this.state.count)})
        console.log("Callback Value",this.state.count)
    }
    autoincrementFive(){
        this.autoincrement()
        this.autoincrement()
        this.autoincrement() 
        this.autoincrement()
        this.autoincrement()
        
    }

    render() {
        return(       
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.autoincrementFive()}>Increment</button>    
            </div>
        )
    }
}

export default Counter
