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
      setIsAuthenticated(true);
      setUserCredentials({ username: storedUsername, password: storedPassword });
    }
  }, []);

  const signup = (username, password) => {
    // Save credentials to localStorage after signup
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    setUserCredentials({ username, password });
    setIsAuthenticated(false); // Stay logged out after signup
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
    // Just clear the authenticated state, not the credentials in localStorage
    setIsAuthenticated(false);
    setUserCredentials(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signup, login, logout, userCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};
