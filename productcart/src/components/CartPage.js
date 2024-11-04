import React, { useState } from 'react'
import './CartPage.css';
import {Link} from 'react-router-dom';

const CartPage = ({cartItems, clearCart,back,removeFromCart}) => {

  const [quantities, setQuantites]= useState(
    cartItems.reduce((acc,item)=>{
      acc[item.id]=1;
      return acc;
    },{})
  );

  const increaseQuantity = (id)=> {
    setQuantites(prevQuantities => ({
      ...prevQuantities, [id]:prevQuantities[id] +1,
    }));
  };

  const decreaseQuantity =(id)=>{
    setQuantites(prevQuantities=>({
      ...prevQuantities,[id]:Math.max(prevQuantities[id]-1,1),
    }));
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  }

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
            <div className='quantity-controls'>
              <div>
              <button className='quantity-button' onClick={ () => decreaseQuantity(item.id)}>-</button>
                   <input type="number" value={quantities[item.id]} readOnly className='quantity-input'/>
              <button className='quantity-button' onClick={ () => increaseQuantity(item.id)}>+</button>
              </div>
              <span className="product-price">₹{(item.price.replace('₹', '').replace(',', '')) * quantities[item.id]}</span>

            </div>
            <button className='delete-button' onClick={()=>handleRemove(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartPage