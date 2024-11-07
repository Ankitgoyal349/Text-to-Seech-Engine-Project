import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/path/to/speech.jpeg" alt="Speechify Logo" id="logo" />
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/text-to-speech">Text-to-Speech</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
