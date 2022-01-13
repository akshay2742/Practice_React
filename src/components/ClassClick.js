import React, { Component } from 'react'

class ClassClick extends Component {

    ClickMe(){
        console.log("Class Clicked!")
    }
    render() {
        return (
            <div>
                <button onClick={() => this.ClickMe()}>Show me!</button>
            </div>
        )
    }
}
export default ClassClick
