import React, { useState , useEffect } from 'react'

function HookMove() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const getMousePosition = e => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect! Rendering...")
        window.addEventListener('mousemove', getMousePosition)

        return () => {
            console.log("useEffect! Cleaning up...")
            window.removeEventListener('mousemove', getMousePosition)
        }
    }, [])

  return (
    <>
        <div>HookMove X - {x} Y - {y}</div>
    </>
  )
}

export default HookMove