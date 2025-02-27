// import React from 'react'
// import { useState } from 'react'


// const Todo = () => {

//     const [todos,setTodos]=useState([]);
//     const [inputValue,setInputValue]=useState("");

    

//     const handleSubmit=(e)=>{
//       e.preventDefault();

//       if(inputValue.trim()){
//         setTodos([...todos,inputValue]);
//         setInputValue("");
//       }
//     }

//     const handleChange=(e)=>{
//       setInputValue(e.target.value);
//     }



//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter Todo'/>
//         <button type='submit'>Add ToDo</button>
//       </form>

//       <h1>Todo List:</h1>
//       <ul>
//       {todos.map((todo,index)=>(
//         <li key={index}>{todo}</li>
//       ))}
//       </ul>
//     </div>
//   )
// }

// export default Todo

import React from 'react'
import { useState } from 'react'


const Todo = () => {

  const [todos,setTodos]=useState([]);
  const [inputValue,setInputValue]=useState("");

  const handleClick=(e)=>{
    e.preventDefault();
    if(inputValue.trim()){
      setTodos([...todos,inputValue]);
      setInputValue("");
    }
  }

  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" value={inputValue} placeholder='Enter todos' onChange={handleChange}/>
        <button onClick={handleClick}>Add Todos</button>
      </form>

      <h1>Todo List: </h1>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
