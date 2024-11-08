import React, { useState } from 'react';
import Modal from './Modal';  
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Track if we are showing signup or login form
  const [signupData, setSignupData] = useState({ username: '', password: '' }); // Store signup data
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignup = (username, password) => {
    // Store the signup data
    setSignupData({ username, password });
    setIsSignup(false);  // Switch to login after successful signup
  };

  const handleLogin = (username, password) => {
    if (username === signupData.username && password === signupData.password) {
      navigate('/home');  
      setIsModalOpen(false);
    }
  };

  return (
    <>
    <nav className="navbar">
      <div className="app-name">Signup/Login Page</div>
      <div className="navbar-buttons">
        <button onClick={handleOpenModal}>Signup/Login</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSignup={handleSignup}
        onLogin={handleLogin}
        isSignup={isSignup}
        signupData={signupData}  // Pass signup data to Modal
        setIsSignup={setIsSignup}
      />
    </nav>
    <br></br>

    <h3>Hey there! Welcome to my Signup/Login Page </h3>
    </>
  );
};

export default Navbar;
