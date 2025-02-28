import React from 'react'
import { useState } from 'react'


const Switcher = () => {
    const [sw,setSw]=useState(false);

  return (
    <div>
      {
        sw? <div>dark</div>: <div>Light</div>
      }
      <br />
      <input type="text" key={sw?"dark":"light"} />
      <button onClick={()=>setSw((s)=>!s)}>Switch</button>
    </div>
  )
}

export default Switcher
