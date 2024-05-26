import React from "react";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaImages,
  FaCalendarAlt,
  FaSignInAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">
            <span className="navbar-brand">AFAAZI</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/">
            <FaHome />
            <span>Home</span>
          </a>
          </li>
        <li className="nav-item">
          <a href="/services">
            <FaClipboardList />
            <span>Services</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/gallery">
            <FaImages />
            <span>Gallery</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#vendors">
            <FaUser />
            <span>Vendors</span>
          </a>
        </li>
       
        <li className="nav-item">
          <a href="/login">
            <FaSignInAlt />
            <span>Login</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/contact">
            <FaEnvelope />
            <span>Contact us</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
