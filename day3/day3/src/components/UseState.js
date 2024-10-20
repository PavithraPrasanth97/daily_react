import React, {useState} from 'react'

const UseState = () => {
    const[number,setNumber]=useState([]);
    const[inputval,setInputval]=useState('')
    
         function addItem(){
             setNumber([...number,inputval])             
         }
  return (
    <>
         <input type='text' placeholder='enter value' onChange={(e)=>setInputval(e.target.value)} />
         <button onClick={addItem}>add</button>
         {
               number.map((item,value)=>{
               return(
               <div key={value}>{item}</div>
                )
                })

         }
    </>

  )
}

export default UseState