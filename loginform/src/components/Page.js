import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Page.css';  // Create styles for this page if needed

const Page = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the post details passed from Home.js
  const { post } = location.state || {}; // fallback to an empty object in case state is not provided

  const handleBack = () => {
    navigate('/home'); // Navigate back to the Home page
  };

  if (!post) {
    return <div>No post selected</div>; // Handle case when no post is passed
  }

  return (
    <div className="page-container">
      <button className="back-btn" onClick={handleBack}>Back</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Page;
