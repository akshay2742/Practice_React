import React from "react";

let Demo = (props) => {
    const {name,institute}=props
    return (
        <div>
            <h1>Hello {name}! from {institute}</h1>
            {props.children}
        </div>
    )
}


export default Demo
