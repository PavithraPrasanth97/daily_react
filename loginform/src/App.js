import React from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Correct import of AuthProvider
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page from './components/Page';

const App = () => {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <AuthProvider>
        <AppRoutes /> {/* Move the routing logic to a separate component */}
      </AuthProvider>
    </Router>
  );
};

const AppRoutes = () => {
  // Get the current location using useLocation hook
  const location = useLocation();

  // Determine whether to show Navbar based on the current pathname
  const showNavbar = location.pathname !== '/home' && location.pathname !== '/page';

  return (
    <>
      {/* Conditionally render Navbar based on the current path */}
      {showNavbar && <Navbar />}
      
      {/* Set up routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/page" element={<Page />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default App;

