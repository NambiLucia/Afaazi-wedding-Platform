import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-menu">
            <li><Link to="/services" className="footer-link">Who We Are</Link></li>
            <li><Link to="/contact" className="footer-link">Book with US</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> Innovation Village, Ntinda, Kampala, Uganda</li>
            <li><FaPhone /> +256 759 247 179</li>
            <li><FaEnvelope /> afaazi@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© {new Date().getFullYear()} Afaazi-Events. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
