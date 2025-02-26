import React from 'react'
import { useState } from 'react'

//In this we have learned to update the arrays

const FriendList = () => {
    const [friends,setFriends]=useState(["abc","pqr"]);
    const handleAdd=()=>{
        setFriends([...friends,"mno"]);
    }

    const handleDelete=()=>{
        setFriends(friends.filter((friend)=>friend!=="pqr"));
    }

    const handleUpdate=()=>{
        setFriends(friends.map((friend)=>(friend==="abc"?"xyz":friend)));
    }

  return (
    <div>
        <h1>Friends List</h1>
        <ul>
            {friends.map((friend)=>(
                <li key={Math.random()}>
                    {friend}
                </li>
            ))}
        </ul>
      <button onClick={handleAdd}>Add a Friend</button>
      <button onClick={handleDelete}>Delete a Friend</button>
      <button onClick={handleUpdate}>Update a Friend</button>
    </div>
  )
}

export default FriendList
