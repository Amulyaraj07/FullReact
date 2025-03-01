import React from 'react'
import { useEffect,useState } from 'react'


const FetchDataEffect = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        async function getData() {
            const response=await fetch('https://jsonplaceholder.typicode.com/posts');
            const data=await response.json();

            if(data && data.length) setData(data);
        }

        getData();
    },[])
  return (
    <div>
      <ul>
        {
            data.map((d)=>(
                
                d.id==1 && <li key={d.id}>{d.title}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default FetchDataEffect
