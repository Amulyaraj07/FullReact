import React from 'react'
import { useEffect } from 'react'


const BasicEffects = () => {
    useEffect(()=>{
        console.log('Component mounted!');
    },[])
  return (
    <div>
      <h1>Check Console for message</h1>
    </div>
  )
}

export default BasicEffects
