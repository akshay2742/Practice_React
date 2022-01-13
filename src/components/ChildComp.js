import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={() => props.functionClick("Child")}>Click</button>            
        </div>
    )
}

export default ChildComp
