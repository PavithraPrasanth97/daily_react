import React, { useState } from 'react';
import Modal from './Modal';  
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Track if we are showing signup or login form
  const [signupData, setSignupData] = useState({ username: '', password: '' }); // Store signup data
  const {  signup, login, logout } = useAuth(); // Access context
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignup = (username, password) => {
    signup(username, password);  // Use signup function from context
    setSignupData({ username, password });
    setIsSignup(false);  // Switch to login after successful signup
  };

  const handleLogin = (username, password) => {
    if (login(username, password)) {
      navigate('/home'); // Redirect to home page after successful login
      setIsModalOpen(false); // Close the modal
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    logout(); // Log the user out
    navigate('/'); // Navigate to login/signup page
  };

  return (
    <>
      <nav className="navbar">
        <div className="app-name">Signup/Login Page</div>
        <div className="navbar-buttons">
        
            <button onClick={handleOpenModal}>Signup/Login</button>
          
        </div>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSignup={handleSignup}
        onLogin={handleLogin}
        isSignup={isSignup}
        signupData={signupData}  // Pass signup data to Modal
        setIsSignup={setIsSignup}
      />
    </>
  );
};

export default Navbar;
