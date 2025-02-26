import React from 'react'
import { useState } from 'react';


//Counter Using Call back function :

const ExampleOne = () => {
    const [count,setCount]=useState(()=>{
        const intialValue=0;
        return intialValue;
    })

    const handleClick=()=>{
        setCount(prevVal=>prevVal+1);
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ExampleOne
