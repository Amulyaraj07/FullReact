import React from 'react'
import Final from './Final';
import { createContext } from 'react'

export const Data=createContext();
export const Data1=createContext();


const MainComp = () => {
    const name="Amulya";
    const age=20;


  return (

    <Data.Provider value={name}>
        <Data1.Provider value={age}>
            <Final/>
        </Data1.Provider>
    </Data.Provider>
  )
}

export default MainComp
