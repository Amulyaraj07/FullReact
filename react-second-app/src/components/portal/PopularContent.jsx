import React from 'react'

const PopularContent = ({copied}) => {
  return (
    <div>
      {copied && (
        <div style={{position:"absolute",bottom:"3rem"}}>
            Copied to clipboard
        </div>
      )}
    </div>
  )
}

export default PopularContent
