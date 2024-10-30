// src/App.js
import React, { useState } from 'react';
import Navbar from './productlist/Navbar';
import Productlist from './productlist/Productlist';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'url_to_image1' },
    { id: 2, name: 'Product 2', price: 20, image: 'url_to_image2' },
    { id: 3, name: 'Product 3', price: 30, image: 'url_to_image3' },
    { id: 4, name: 'Product 4', price: 40, image: 'url_to_image4' },
    { id: 5, name: 'Product 5', price: 50, image: 'url_to_image5' },
    { id: 6, name: 'Product 6', price: 60, image: 'url_to_image6' },
    { id: 7, name: 'Product 7', price: 70, image: 'url_to_image7' },
    { id: 8, name: 'Product 8', price: 80, image: 'url_to_image8' },
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateItemQuantity = (id, amount) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          if (newQuantity > 0) {
            return { ...item, quantity: newQuantity };
          }
          return item; // Don't change item if the quantity would be zero or less
        }
        return item;
      });
    });
  };

  const deleteItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Productlist products={products} addToCart={addToCart} />

      {/* Cart Items Section */}
      <div style={{ padding: '1rem', borderTop: '1px solid #ccc', marginTop: '1rem' }}>
        <h2>Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <p>{item.name} - ${item.price} x {item.quantity}</p>
              <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
