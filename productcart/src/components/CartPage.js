import React from 'react'
import './CartPage.css';

const CartPage = ({cartItems, clearCart}) => {
  return (
    <div className='cartpage'>
        <div className='cart-header'>
          <h1>Your Cart</h1>
          <button className='clear-cart-button' onClick={clearCart}>Clear Cart</button>
        </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} style={{ width: '50px' }} />
              <span>{item.title}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartPage