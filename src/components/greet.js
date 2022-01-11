import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return (
            <div className="dummyClass">
                <h1>Hi {this.props.name}! from {this.props.institute}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;