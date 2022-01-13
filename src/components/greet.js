import React, { Component } from "react";

class Welcome extends Component{
    
    render(){
        const {name,institute}=this.props
        return (
            <div className="dummyClass">
                <h1>Hi {name}! from {institute}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;