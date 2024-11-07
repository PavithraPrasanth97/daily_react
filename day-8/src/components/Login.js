import React, {useContext, useState} from 'react'
import {useNavigate} from "react-router-dom"
import AuthContext from '../context/AuthContext';

const Login = () => {
    const [name, setName]=useState("");
 
    const {handleLoginAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    function handleLogin(){
        if(name === "Pavithra"){
            console.log("Login Successfully");
            handleLoginAuth();
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