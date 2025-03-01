import React, { useContext } from 'react'
import { Data,Data1 } from './MainComp'


//using create context:

// const Final = () => {
//     return (
//   <Data.Consumer>
//     {
//         (name)=>{
//             return (
//                 <Data1.Consumer>
//                     {
//                         (age)=>{
//                             return <h1>My name is {name} and age is: {age}</h1>
//                         }
//                     }
//                 </Data1.Consumer>
//             )
//         }
//     }
//   </Data.Consumer>
//     )
// }


//using useContext:
const Final = () => {
    const userName=useContext(Data);
    const userAge=useContext(Data1);
    return (
        <h1>My name is {userName} and my age is{userAge}....</h1>
    )
}


export default Final
