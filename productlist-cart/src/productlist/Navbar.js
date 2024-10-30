// src/components/Navbar.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ onCartClick }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white' }}>
      <h1>Company Name</h1>
      <div onClick={onCartClick} style={{ cursor: 'pointer' }}>
        <FaShoppingCart size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
