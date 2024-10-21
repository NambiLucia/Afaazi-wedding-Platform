import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaSignInAlt,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const serviceProviders = [
  { id: 1, name: "Mona Faces(1)" },
  { id: 2, name: "Hair By Zziwa(2)" },
  { id: 3, name: "Golazo Photography(3)" },
  { id: 4, name: "Kembabazi Catering(4)" },
  { id: 5, name: "iCandy Ug(5)" },
  { id: 6, name: "Latitude 0 degrees(6)" },
];

function NavBar() {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  // Check if the token exists when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const searchWord = e.target.value.toLowerCase();
    setName(searchWord);

    const filteredVendor = serviceProviders.filter((serviceprovider) => {
      return serviceprovider.name.toLowerCase().includes(searchWord);
    });

    setResult(filteredVendor);
  };

  const handleLoginClick = () => {
    //
    navigate('/login');
  };

  const handleLogoutClick = () => {
    // Clear the token from localStorage and log the user out
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate('/'); 
  };

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
          <Link to="/vendors">
            <FaUser />
            <span>Vendors</span>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <div className="dropdown-toggle">
            {isLoggedIn ? (
              <>
                <FaSignOutAlt />
                <span className="login-span" onClick={handleLogoutClick}>Logout</span>
              </>
            ) : (
              <>
                <FaSignInAlt />
                <span className="login-span" onClick={handleLoginClick}>Login</span>
              </>
            )}
          </div>
          {!isLoggedIn && (
            <div className="dropdown-menu">
              <Link to="/login" className="dropdown-item">Couple</Link>
              <Link to="/Vendorlogin" className="dropdown-item">Vendor</Link>
            </div>
          )}
        </li>

        <li>
          <input
            type="search"
            value={name}
            onChange={handleInputChange}
            className="input"
            placeholder="Search vendor"
          />
        </li>

        <div className="search-results-container">
          {name && (
            <ul className="search-results">
              {result.length > 0 ? (
                result.map((serviceprovider) => (
                  <li key={serviceprovider.id} className="result-item">
                    {serviceprovider.name}
                  </li>
                ))
              ) : (
                <li className="result-item">No vendors found</li>
              )}
            </ul>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
