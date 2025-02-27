import React from 'react'
import { useState,useEffect } from 'react'

//Here we will see getting the data from local storage and displaying on the page


const ExampleThree = () => {

    const [name,setName]=useState(()=>{
        const savedName=localStorage.getItem("name");
        return savedName?JSON.parse(savedName):""; 
  });

  //This useEffect is changing the value in local host
  //Whenever the name is changed it will be stored in local storage
  //We can skip it then also it will work
  
  useEffect(()=>{
    localStorage.setItem("name",JSON.stringify(name));
  })

  const handleChange=(e)=>{
    setName(e.target.value);
  }

  

  const handleClick=()=>{
    setName("");
  }

  return (
    <div>
      <h1>Your name is : {name}</h1>
      <input type="text" onChange={handleChange} value={name}/>
      <button onClick={handleClick}>Reset Name</button>
    </div>
  )
}

export default ExampleThree
