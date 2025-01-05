import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* About Section */}
        <div className="footer__about">
          <h2>KnittMates</h2>
          <p>Your trusted companion for all things knitting. Join us and start your journey today!</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer__social">
          <h3>Follow Us</h3>
          <div className="social__icons">
            <a href="https://x.com/knittmates" target="_blank" rel="noopener noreferrer">Twitter(X)</a>
            <a href="https://www.youtube.com/@KnittMates" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.tiktok.com/@knittmates?lang=en" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__copyright">
        <p>© 2024 KnittMates. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;