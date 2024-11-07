import './App.css';
import React, {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Param from "./components/Param";
import Login from "./components/Login";
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import ProductiveRoute from './components/ProductiveRoute';


function App() {
  return (
    <div>
        <AuthProvider>
      <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<ProductiveRoute><Home/></ProductiveRoute>}/>
        <Route path="/about" element={<ProductiveRoute><About/></ProductiveRoute>}caseSensitive/>
        <Route path="/:productId" element={<ProductiveRoute><Param/></ProductiveRoute>}/>
        <Route path="/:meetId" element={<ProductiveRoute><Param/></ProductiveRoute>}/>
        
        </Route>
        <Route path="*" element={<Error/>}/>     
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
