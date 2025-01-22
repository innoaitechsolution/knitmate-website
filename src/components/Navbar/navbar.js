import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img
          src={require('../../assets/logo.png')}
          alt="KnittMates Logo"
          className="navbar__logo-img"
        />
        <h1>KnittMates</h1>
      </div>

      {/* Hamburger Menu */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Social Media Links */}
      <div className="navbar__social">
        <a href="https://x.com/knittmates" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/@KnittMates" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://www.tiktok.com/@knittmates?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


