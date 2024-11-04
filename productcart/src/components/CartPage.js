import React from 'react'
import './CartPage.css';
import {Link} from 'react-router-dom';

const CartPage = ({cartItems, clearCart,back}) => {

    return (
    <div className='cartpage'>
        <div className='cart-header'>
          <h1>Your Cart</h1>
          <div className='button-group'>
             <button className='clear-cart-button' onClick={clearCart}>Clear Cart</button>          
             <Link to="/" className='back'> 
             <button className='back-button' onClick={back}>Back</button>
             </Link>
          </div>

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