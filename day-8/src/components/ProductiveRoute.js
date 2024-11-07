import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import {Navigate} from "react-router-dom"


const ProductiveRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth);
    if (!isAuth){
        return <Navigate to="/Login"></Navigate>
    }
  return children;
  
}

export default ProductiveRoute