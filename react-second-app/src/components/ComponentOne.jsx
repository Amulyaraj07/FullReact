import React from 'react'

const ComponentOne = ({count,onClickHandler}) => {
  return (
    <div>
      <p>Count: {count}</p>
        <button onClick={onClickHandler}>Increment</button>
    </div>
  )
}

export default ComponentOne
