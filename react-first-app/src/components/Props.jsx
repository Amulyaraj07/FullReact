import React from 'react'

// const Props = (props) => {
//   return (
//     <div>
//       <img src={props.img} alt={props.name} width={200}/>
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>Is Married: {props.isMarried}</h3>
//       <h4>Hobbies: {props.hobbies}</h4>
//     </div>
//   )
// }

//props destructuring
const Props = ({img,name,age,isMarried,hobbies}) => {
    return (
      <div>
        <img src={img} alt={name} width={200}/>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>Is Married: {isMarried}</h3>
        <h4>Hobbies: {hobbies}</h4>
      </div>
    )
  }

export default Props
