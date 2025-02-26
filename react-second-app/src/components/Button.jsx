import React from 'react'

function Button() {
    const handleClick=()=> console.log(Math.round(Math.random()*10));
    
  return (
    <div>
      <button onClick={()=>console.log("you clicked me")}>Click me</button>
      <button onClick={handleClick}>Display Random Number</button>
    </div>
  )
}

export default Button
