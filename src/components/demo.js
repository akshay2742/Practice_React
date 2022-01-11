import React from "react";

let Demo = (props) => {
    return (
        <div>
            <h1>Hello {props.name}! from {props.institute}</h1>
            {props.children}
        </div>
    )
}


export default Demo
