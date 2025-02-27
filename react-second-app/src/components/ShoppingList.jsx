import React from 'react'
import { useState } from 'react'


const ShoppingList = () => {
    const [items,setItems]=useState([]);
    const [name,setName]=useState('');
    const [quantity,setQuantity]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!name || !quantity) return;

        const newItem={
            name,
            quantity:parseInt(quantity),
        }

        setItems((prevItem)=>([...prevItem,newItem]));
        setName('');
        setQuantity('');

    }

  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="number" name='quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>

      <h1>Shopping List</h1>

      <ul>
        {items.map((item,index)=>(
            <li key={index}>{item.name}-{item.quantity}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
