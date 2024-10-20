import React, {useState,useEffect} from 'react'

export const UseEffect = () => {
    const[count,setCount]=useState(0);
    const[message,setMessage]=useState('');

    useEffect(()=>{
        if(count > 10){
            setMessage('Value is defined')
        }
    },[count])

    
  return (
        <>
        <div>
            {message};
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>OPEN</button>
        </div>
        </>
  )
}
