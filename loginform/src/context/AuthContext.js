import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userCredentials, setUserCredentials] = useState(null);

  // Check for saved credentials in localStorage on app load
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      // Here we assume the user is authenticated if valid credentials exist in localStorage
      setIsAuthenticated(true);
      setUserCredentials({ username: storedUsername, password: storedPassword });
    }
  }, []);

  const signup = (username, password) => {
    // Save credentials to localStorage after signup (Note: consider better security for production)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    setUserCredentials({ username, password });
    setIsAuthenticated(false); // Stay logged out after signup (consider changing this logic)
  };

  const login = (username, password) => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials from localStorage
    if (storedUsername === username && storedPassword === password) {
      setIsAuthenticated(true);
      setUserCredentials({ username, password });
      return true;
    }
    return false;
  };

  const logout = () => {
    // Clear credentials from both state and localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setIsAuthenticated(false);
    setUserCredentials(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signup, login, logout, userCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};
