import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav className='navbar'>
        <div className='app-name'>Signup Page</div>
        <div className='navbar-buttons'>
            <button>Signup</button>
            {/* <button>Login</button> */}
        </div>
      </nav>
  )
}

export default Navbar