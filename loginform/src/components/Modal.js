import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSignup, onLogin, isSignup, setIsSignup, signupData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const [signupSuccess, setSignupSuccess] = useState(false); 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match!');
        return;
      }
      onSignup(username, password); 
      setSignupSuccess(true); 
      setErrorMessage(''); // Clear any previous errors
      setTimeout(() => {
        setIsSignup(false);  // Toggle to login form after signup
      }, 1000);
    } else {
      // Handle login logic
      if (username === signupData.username && password === signupData.password) {
        onLogin(username, password); // Successful login
        setErrorMessage(''); // Clear any previous errors
      } else {
        setErrorMessage('Invalid username or password!'); 
      }
    }
  };

  // Switch between signup and login forms
  const toggleForm = () => {
    setSignupSuccess(false); // Clear signup success message
    setIsSignup((prevState) => !prevState); // Toggle between login and signup
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
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
              required placeholder='Enter name / Email ID'
            /> 
          </div>
          <div className="input-group">
            <label htmlFor="password">Password :</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required placeholder='Enter Password'
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
                required placeholder='Re-enter Password'
              />
            </div>
          )}

          
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <br></br>

          
          {signupSuccess && !isSignup && <div className="success-message">Signup successful! Please login.</div>}
          <br></br>

          <div className="button-group">
            <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>

        {/* Switch between Signup and Login Modals */}
        {isSignup && (
          <div className="switch-to-login">
            <p>Already have an account? <button className="link-button" onClick={toggleForm}>Login</button></p>
          </div>
        )}

        {!isSignup && (
          <div className="switch-to-signup">
            <p>Don't have an account? <button className="link-button" onClick={toggleForm}>Signup</button></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

