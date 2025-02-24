import React from 'react'

const Expressions = () => {

    const myName="Amulya Raj";
    const multiply=(a,b)=> a*b;
  return (
    <div>
      <p>2 x 2 ={2*2}</p>
      <h1>{myName}</h1>
      <p>My friends list: {["abc","xyz","pqr"]}</p>
      <p>9X2={multiply(9,2)}</p>  
    </div>
  )
}

export default Expressions
