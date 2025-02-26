import React from 'react'
import { useState } from 'react'



const ExampleTwo = () => {

    const [randomNum,setRandomNum]=useState(()=>
        (Math.floor(Math.random()*100))
    );

    const handleGen=()=>{
        const newRandomNum=Math.floor(Math.random()*100);
        setRandomNum(newRandomNum);
    }
  return (
    <div>
      <h1>random Number: {randomNum}</h1>
      <button onClick={handleGen}>Generate Random Num</button>
    </div>
  )
}

export default ExampleTwo
