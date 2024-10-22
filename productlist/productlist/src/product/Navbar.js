import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ toggleTheme }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default NavBar;
