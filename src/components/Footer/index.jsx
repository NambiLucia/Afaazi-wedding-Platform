
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./footer.css";

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
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <ul>
            <li><FaMapMarkerAlt /> 123 Wedding Avenue, City, Country</li>
            <li><FaPhone /> +123456789</li>
            <li><FaEnvelope /> info@example.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Afaazi- Events. All rights reserved.</p>
    </footer>
  );
}

export default Footer;