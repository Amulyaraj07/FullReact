import React from 'react';
import { useState } from 'react';
import PopularContent from './PopularContent';


const CopyingInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [copiedValue, setCopiedValue] = useState(false);

    const handleCopy=()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopiedValue(true);

            setTimeout(()=>setCopiedValue(false),2000)
        })
    }

  return (
    <div>
      <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        <button onClick={handleCopy}>Copy</button>
        <PopularContent copied={copiedValue} />
    </div>
  )
}

export default CopyingInput
