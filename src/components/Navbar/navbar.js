import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
      <img src={require('../../assets/logo.png')} alt="KnittMates Logo" className="navbar__logo-img" />
        <h1>KnittMates</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Social Media Links */}
      <div className="navbar__social">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
      </div>
    </nav>
  );
};

export default Navbar;
