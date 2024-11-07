import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productcart from './components/Productcart';
import CartPage from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  

 
  const addToCart = (product) => {
    console.log("addToCart",product);
 
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
   
  };

  
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };


   const clearCart = () => {
    setCartItems([]); 
  };


  const removeFromCart = (id) => {
    const updatedItems = [];
    for (let item of cartItems) {
      if (item.id !== id) {
        updatedItems.push(item);
      }
    }
    setCartItems(updatedItems);
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Productcart addToCart={addToCart} />} />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                setCartItems={setCartItems}
                clearCart={clearCart}  
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
