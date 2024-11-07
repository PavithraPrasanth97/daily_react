import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import onlineshoping from "../image/onlineshoping";
import "./Navbar.css";

const Navbar = ({ cartItems }) => {
  let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

 
//   let totalItems = 0;
// cartItems.forEach(item => {
//   totalItems += item.quantity;
// });


  return (
    <div className="NavBar">
      <img src={onlineshoping} alt="Logo" />
      <h1>Webcom</h1>
      <Link to="/cart" className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{totalItems}</span>
      </Link>
    </div>
  );
};

export default Navbar;
