import './App.css';
import React, {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Param from "./components/Param";
import Login from "./components/Login";
import Layout from './components/Layout';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}caseSensitive/>
        <Route path="/:productId" element={<Param/>}/>
        <Route path="/:meetId" element={<Param/>}/>
        
        </Route>
        <Route path="*" element={<Error/>}/>     
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
