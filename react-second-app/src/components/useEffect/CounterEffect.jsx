import React from 'react'
import { useEffect,useState } from 'react'


const CounterEffect = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("mounted on change counter");
    },[count])

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect
