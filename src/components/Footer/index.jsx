// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Better Fonts. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
