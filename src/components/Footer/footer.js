import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about-section">
          <h3>KnittMates</h3>
          <p>© 2024 KnittMates. All rights reserved.</p>
          <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social-icons">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

