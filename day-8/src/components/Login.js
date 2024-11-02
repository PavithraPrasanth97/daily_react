import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [name, setName]=useState("");
    const navigate = useNavigate();
    function handleLogin(){
        if(name === "Pavithra"){
            console.log("Login Successfully");
            navigate("/about");
        }
        else{
            console.log("Invalid login");
        }
    }
  return (
    <div>
        Name: 
        <input 
          type="text"
          onChange={(e) => {
            setName(e.target.value)
             }}>
         </input>
        Password: 
        <input type="password"></input>
        <button onClick={handleLogin}>Login</button>        
    </div>
  )
}

export default Login