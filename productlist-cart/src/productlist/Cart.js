// src/components/Cart.js
import React from 'react';

const Cart = ({ items }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Cart Items</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
