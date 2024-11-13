import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSignup, onLogin, isSignup, setIsSignup, signupData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match!');
        return;
      }
      onSignup(username, password); // Call signup from Navbar
      setErrorMessage('');
    } else {
      // Handle login logic
      if (onLogin(username, password)) {
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid username or password!');
      }
    }
  };

  const toggleForm = () => {
    setErrorMessage('');
    setIsSignup(!isSignup);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isSignup ? 'Signup' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username :</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required placeholder='Enter username'
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password :</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required placeholder='Enter password'
            />
          </div>

          {isSignup && (
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password :</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required placeholder='Confirm password'
              />
            </div>
          )}

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="button-group">
            <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>

        <div className="switch-to-login">
          {isSignup ? (
            <p>Already have an account? <button className="link-button" onClick={toggleForm}>Login</button></p>
          ) : (
            <p>Don't have an account? <button className="link-button" onClick={toggleForm}>Signup</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
