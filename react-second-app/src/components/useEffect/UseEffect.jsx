// We setup useEffect hook to run some code WHEN
//  👉 Component renders for the (First Time)
//  👉  & WHENEVER it re-renders
//  👉  & some data in our component changed.


import React from 'react'
import { useState,useEffect } from 'react'

const UseEffect = () => {
    const [value,setValue]=useState(0);
    const [count,setCount]=useState(0);

    //render for the first time so it is not 
    //updating the title
    // useEffect(()=>{
    //     console.log("called useEffect");

    //     document.title=`Increment ${value}`;
    // },[]);

    // useEffect(()=>{
    //     console.log("called useEffect");

    //     document.title=`Increment ${value}`;
    // });

    //whenever the value chnages it will re render
    // useEffect(()=>{
    //     console.log("called useEffect");

    //     document.title=`Increment ${value}`;
    // },[value]);


    //whenever the count chnages it will re render
    useEffect(()=>{
        console.log("called useEffect");

        document.title=`Increment ${value}`;
    },[count]);

    //Error: conditional statement agr bahar ho
    // if(value>0){
    //     useEffect(()=>{
    //         console.log("called useEffect");

    //         document.title=`Increment ${value}`;
    //     },[count]);
    // }

    //Runs Fine: conditional statement agr andr ho
        useEffect(()=>{
            if(value>0){
            console.log("called useEffect");

            document.title=`Increment ${value}`;
            }
        },[count]);



  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=> setValue(value+1)}>Click Me</button>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default UseEffect
