import React from 'react';
import { Routes, Route, BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';  // Correct import of AuthProvider
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page from './components/Page';
import Error from './components/Error';  // Assuming you have an Error component
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Determine whether to show Navbar based on the current pathname
  const showNavbar = location.pathname !== '/home' && location.pathname !== '/page';

  // Check if the user is authenticated before rendering protected routes
  const isProtectedRoute = (path) => {
    if (path === '/home' || path === '/page') {
      return isAuthenticated; // Only show Home or Page if authenticated
    }
    return true; // Allow all other routes (e.g., Error, Login, etc.)
  };

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* Error Page */}
        <Route path="/error" element={<Error />} />

        {/* Protected Routes */}
        <Route path="/home" element={isProtectedRoute('/home') ? <Home /> : <Error />} />
        <Route path="/page" element={isProtectedRoute('/page') ? <Page /> : <Error />} />

        {/* Add other routes as needed */}
      </Routes>
    </>
  );
};

export default App;
