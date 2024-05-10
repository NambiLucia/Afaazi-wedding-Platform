import React from "react";
import { FaHome, FaUser, FaClipboardList, FaImages, FaCalendarAlt, FaSignInAlt, FaEnvelope } from "react-icons/fa";
import "./navbar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><FaHome /></a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/services">
                        <FaClipboardList />
                        <span>Services</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#vendors">
                        <FaUser />
                        <span>Vendors</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#packages">
                        <FaCalendarAlt />
                        <span>Packages</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/gallery">
                        <FaImages />
                        <span>Gallery</span>
                    </a>
                </li>
            </ul>
            <div className="navbar-icons">
                <a href="/bookingpage">
                    <FaCalendarAlt />
                    <span>Book Wedding</span>
                </a>
                <a href="/login">
                    <FaSignInAlt />
                    <span>Login</span>
                </a>
                <a href="/contact">
                    <FaEnvelope />
                    <span>Contact Us</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
