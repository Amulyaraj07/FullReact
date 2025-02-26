import React from 'react'

const Copy = () => {
    const copyHandler=()=> console.log("Stop Copying my text");

  return (
    <div>
      <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis facere amet eligendi! Nisi beatae qui ipsum veniam aperiam possimus, repellat facilis voluptatum atque fugiat ipsa. Nisi reprehenderit necessitatibus culpa!</p>
    </div>
  )
}

export default Copy
