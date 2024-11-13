// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('username');  // Check if user is logged in

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Element : <Navigate to="/error" />}  // Redirect if not authenticated
    />
  );
};

export default PrivateRoute;
