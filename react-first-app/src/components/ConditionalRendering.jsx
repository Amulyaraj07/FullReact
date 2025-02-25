import React from 'react'

//Example 1:

// const ValidPassword=()=>{
//     return <h1>This is Valid Password</h1>
// }

// const InvalidPassword=()=>{
//     return <h1>This is Invalid Password</h1>
// }
// const ConditionalRendering = ({isValid}) => {
//     // if(isValid){
//     //     return <ValidPassword/>
//     // }
//     // return <InvalidPassword/>

//     //using Ternary operator
//     return isValid?<ValidPassword/> : <InvalidPassword/>
  
// }


//Example 2: Rendering List items when available

// const ConditionalRendering = () => {
//     const ProductList=["abc","def","ghi","jkl"];

//   return (
//     <div>
//       <h1>Cart</h1>
//       {ProductList.length>0 && <h2>You have {ProductList.length} items in your cart</h2> }

//       <ul>
//         <h4>Products</h4>
//         {ProductList.map((item)=>(
//             <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

//Example 3: Weather App

// const ConditionalRendering = ({temp}) => {
//   if(temp<15){
//     return <h1> Its cold outside</h1>
//   }else if(temp>=15 && temp<=25){
//     return <h1>Its nice outside</h1>
//   }
//   return <h1>Its hot outside</h1>
// }

// export default ConditionalRendering

//Example 4: User Status:

// const ConditionalRendering = ({isLogged,isAdmin}) => {
//   if(isLogged && isAdmin){
//     return <h1>Welcome Admin!</h1>
//   }else if(isLogged && !(isAdmin)){
//     return <h1>Welcome User</h1>
//   }
//   return <h1>You have not logged in</h1>
// }

// export default ConditionalRendering

//Example 5:Use ternary operator

const ConditionalRendering = ({timeOfDay}) => {
  return timeOfDay=="morning"? <h1>Good Morning</h1>: <h1>Good Afternoon</h1>
}

export default ConditionalRendering


