import React from 'react'
import onlineshoping from "../image/onlineshoping"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import  "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = ({cartItems}) => {
  return (
    <>
    <div className='NavBar'>
        <img src={onlineshoping} alt="Logo"/>
        <h1>Webcom</h1>
        {/* <h1>My Store</h1> */}
        
        <Link to="/cart" className='cart-icon'>
        <FontAwesomeIcon icon={faShoppingCart}/>
        <span>{cartItems.length}</span> 
        </Link>
    </div>
    <h2>Electronic Gadgets</h2>
    </>
  )
}

export default Navbar