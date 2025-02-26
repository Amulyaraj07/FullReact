import React from 'react'

const Move = () => {
    function moveHandler(){
        alert("Stop Moving my text");
        console.log("Mouse move event triggered");
    }
  return (
    <div>
      <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat aperiam eum consequuntur, cum esse eos repellendus recusandae quo voluptatem.</p>
    </div>
  )
}

export default Move
