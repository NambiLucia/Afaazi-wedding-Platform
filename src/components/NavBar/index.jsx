import React from "react";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaImages,
  FaCalendarAlt,
  FaSignInAlt,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">
            <span className="navbar-brand">AFAAZI</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
          <FaHome />
            <span>Home</span>
          </Link>
          </li>

          <li className="nav-item">
          <Link to="/about">
          <FaQuestionCircle /> 
            <span>About us</span>
          </Link>
          </li>


        <li className="nav-item">
          <Link to="/services">
            <FaClipboardList />
            <span>Services</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery">
            <FaImages />
            <span>Gallery</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/vendors">
            <FaUser />
            <span>Vendors</span>
          </Link>
        </li>
       
        <li className="nav-item dropdown">
    <div className="dropdown-toggle">
        <FaSignInAlt />
        <span className="login-span">Login</span>
    </div>
    <div className="dropdown-menu">
        <Link to="/login" className="dropdown-item">Couple</Link>
        <Link to="/Vendorlogin" className="dropdown-item">Vendor</Link>
    </div>
</li>


        <li className="nav-item">
          <Link to="/contact">
            <FaEnvelope />
            <span>Contact us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
