import React from 'react'
import {useState} from 'react';


//In this we have learned to update the numbers
const Counter = () => {
    const [count,setCount]=useState(0);

    const increment=()=> setCount(count+1);
    const decrement=()=> setCount(count-1);

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
