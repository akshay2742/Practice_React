import React from 'react'

function CheckButton() {

    function buttonreact(){
        console.log("Button Clicked!")
    }

    return (
        <div>
            <button onClick={() => buttonreact()}>Click</button>
        </div>
    )
}

export default CheckButton
