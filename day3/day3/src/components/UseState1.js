import React, {useState} from 'react'

const UseState1 = () => {
    const[input,setInput] = useState({
        Uname:'',
        email:''
    })
    function handleChange(e){
        const{name,value}=e.target;
        setInput({...input,[name]:value})
    }
  return (
       <>
          <input type='text' name='Uname' value={input.Uname} onChange={handleChange}/>
          <input type='text' name='email' value={input.email} onChange={handleChange}/>
          <div>Name : {input.Uname}</div>
          <div>Email : {input.email}</div>
          

       </>
  )
}

export default UseState1