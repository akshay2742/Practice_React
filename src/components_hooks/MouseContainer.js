import React, { useState } from 'react'
import HookMove from './HookMove'

function MouseContainer() {
    const [display, setDisplay] = useState(true)


  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <HookMove />}
    </div>
  )
}

export default MouseContainer