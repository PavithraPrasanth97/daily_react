import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({image,title,price,addToCart,id}) => {
  return (
    <div className='product-container'>
        <img src={image} alt={title} className='product-image'/>
        <div className='price-container'>
        <p className='product-price'>{price}</p>
      <FontAwesomeIcon icon={faShoppingCart} className='cart-icon-in' onClick={() => addToCart({title,price,image,id})} />
        </div>
        <p className='product-title'>{title}</p>
       
    </div>
  )
}

export default Product