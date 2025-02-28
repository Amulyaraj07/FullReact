import React from 'react';
import {createPortal} from 'react-dom';


const PopularContent = ({copied}) => {
  return createPortal(
    <div>
      {copied && (
        <div style={{position:"absolute",bottom:"3rem"}}>
            Copied to clipboard
        </div>
      )}
    </div>,
    document.querySelector('#popup-content')
  )
}

export default PopularContent
