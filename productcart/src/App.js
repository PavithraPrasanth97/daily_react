
// import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productcart from './components/Productcart';
import CartPage from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product)=> {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  const clearCart = () => {
    setCartItems([]);

  }
  return (
    <Router>
    <div>
      <Navbar cartItems ={cartItems}/>
      <Routes>      
      <Route path="/" element={<Productcart addToCart={addToCart}/>}/>
      <Route path="/cart" element={<CartPage cartItems={cartItems} clearCart={clearCart}/>}/>
      </Routes>
     

    </div>
    </Router>
  );
}

export default App;
