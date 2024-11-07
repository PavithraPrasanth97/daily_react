import React, { useState } from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, setCartItems, clearCart, removeFromCart }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

 
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);
  const [isEmptyCartModalOpen, setIsEmptyCartModalOpen] = useState(false);

 
  const increaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    );
    setCartItems(updatedItems); 
  };

  
  const decreaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    );
    setCartItems(updatedItems); 
  };

  
  const handleDelete = (id) => {
    setIsModalOpen(true); 
    setProductToDelete(id); 
  };

  const confirmDelete = () => {
    removeFromCart(productToDelete); 
    setIsModalOpen(false); 
    setProductToDelete(null); 
  };


  const cancelDelete = () => {
    setIsModalOpen(false); 
    setProductToDelete(null); 
  };


  const handleClearCart = () => {
    if (cartItems.length === 0) {
      setIsEmptyCartModalOpen(true); 
    } else {
      setIsClearCartModalOpen(true); 
    }
  };

  
  const confirmClearCart = () => {
    clearCart(); 
    setIsClearCartModalOpen(false); 
  };


  const cancelClearCart = () => {
    setIsClearCartModalOpen(false); 
  };

 
  const closeEmptyCartModal = () => {
    setIsEmptyCartModalOpen(false); 
  };

  return (
    <div className="cartpage">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <div className="button-group">
          <button className="clear-cart-button" onClick={handleClearCart}>
            Clear Cart
          </button>
          <Link to="/" className="back">
            <button className="back-button">Back</button>
          </Link>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} style={{ width: '50px' }} />
              <span>{item.title}</span>
              <span>{item.price}</span>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => decreaseQuantity(item.id)} 
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="quantity-input"
                />
                <button
                  className="quantity-button"
                  onClick={() => increaseQuantity(item.id)} 
                >
                  +
                </button>
              </div>
              <span className="product-price">₹{item.price.replace('₹', '') * item.quantity}</span>
              {/* Delete button triggers modal */}
              <button className="delete-button" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for Product Deletion */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Are you sure you want to delete this product?</h2>
            <div className="modal-actions">
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Clear Cart */}
      {isClearCartModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Are you sure you want to clear the entire cart?</h2>
            <div className="modal-actions">
              <button onClick={confirmClearCart}>Yes</button>
              <button onClick={cancelClearCart}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Empty Cart */}
      {isEmptyCartModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>There is nothing to clear!</h2>
            <div className="modal-actions">
              <button onClick={closeEmptyCartModal}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
