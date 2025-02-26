import React from 'react'
import { useState } from 'react'

//In this we have learned to update the objects

// const Movies = () => {
//     const [movie,setMovie]=useState({
//         name:"abc",
//         rating:5,
//     });

//     // const handleChange=()=>setMovie({...movie, rating:10});
//     //or we can do this:

//     const handleChange=()=>{
//         const copyMovie={
//             ...movie,
//             rating:10,
//         }
//         setMovie(copyMovie);
//     }
    

//   return (
//     <div>
//       <h1>Movie Name: {movie.name}</h1>
//         <h1>Movie Rating: {movie.rating}</h1>
//         <button onClick={handleChange}>Change</button>
//     </div>
//   )
// }

// export default Movies


//When we have array of objects:

const Movies = () => {
    const [movie,setMovie]=useState([
        {id:1,name:"abc",rating:5},
        {id:2,name:"pqr",rating:4},
        {id:3,name:"xyz",rating:3},
    ]);

    const handleClick=()=>{
        setMovie(
            movie.map((m)=>(
                m.id===1?{...Movies,name:"one"}:m
            ))
        )
       
    }

  return (
    <div>
      {movie.map(m=>(
        <li key={Math.random()}>Name of Movie: {m.name}</li>
      ))}

      <button onClick={handleClick}>Change Movie Name</button>
    </div>
  )
}

export default Movies
