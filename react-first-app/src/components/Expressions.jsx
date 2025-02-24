import React from 'react'

const Expressions = () => {

    const myName="Amulya Raj";
    const multiply=(a,b)=> a*b;
    const specialClass="special-one";
    const date=new Date();

  return (
    <div>
      <p>2 x 2 ={2*2}</p>
      <h1>{myName}</h1>
      <p>My friends list: {["abc","xyz","pqr"]}</p>
      <p>9X2={multiply(9,2)}</p>  
      <p className={specialClass}>This is Special Class</p>
      <p>date: {date.getDate()}</p>
    </div> 
  )
}

export default Expressions
