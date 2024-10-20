import React, {useEffect,useState} from 'react'

export const UseEffect1 = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        const apicall = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const values = await response.json();
        setData(values);
        }
        apicall();
    },[])
  return (
    <>
   <h1>Get the data</h1>
   <div>
       {data.map((item)=>(
        <ul key={item.id}> {item.title}</ul>
       ))}
   </div>
   </>
  )
}
