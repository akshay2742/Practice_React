import React, { Component } from 'react'


class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             text: "Learning Event Handling!"
        }

        this.change=this.change.bind(this)
    }
    change(){
        this.setState((prevState) => ({
            text: "Congrats! You have Learned Event Handling"
        }),() => {console.log("Function Worked!")})
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.change}>Change</button>
            </div>
        )
    }
}

export default EventBind