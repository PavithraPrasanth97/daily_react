
// import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productcart from './components/Productcart';
import CartPage from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product)=> {
    setCartItems((prevItems) =>{
      const existingProduct = prevItems.findIndex(item=>item.id===product.id);
      if(existingProduct !== -1){
        const updatedItems =[...prevItems];
        updatedItems[existingProduct].quantity +=1;
        return updatedItems;
      } else {
        return [...prevItems, {...product, quantity: 1}];
      }
    });
  };
  
  const clearCart = () => {
    setCartItems([]);
  }
  // const back = () => {
    
  // }

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };
  return (
    <Router>
    <div>
      <Navbar cartItems ={cartItems}/>
      <Routes>      
      <Route path="/" element={<Productcart addToCart={addToCart}/>}/>
      <Route path="/cart" element={<CartPage cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} />}/>
      </Routes>
     

    </div>
    </Router>
  );
}

export default App;
