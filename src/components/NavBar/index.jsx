import React, { useState } from 'react';
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

const serviceProviders = [
{id:1, name:"Mona Faces(1)"},
{id:2, name:"Hair By Zziwa(2)"},
{id:3, name:"Golazo Photography(3)"},

];


function NavBar() {
  const [name, setName] = useState("");
  const [result, setResult]= useState([]);
const handleInputChange =(e)=>{
  const searchWord =e.target.value.toLowerCase();
  setName(searchWord);

const filteredVendor = serviceProviders.filter((serviceprovider) =>{
    return serviceprovider.name.toLowerCase().includes(searchWord)
  })

 setResult(filteredVendor);


}



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
       

        {/* <li className="nav-item">
          <Link to="/gallery">
            <FaImages />
            <span>Gallery</span>
          </Link>
        </li> */}
        
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



<li>
        <input
        type="search"
        value={name}
        onChange={handleInputChange}
        className="input"
        placeholder="search vendor"
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











        {/* <li className="nav-item">
          <Link to="/contact">
            <FaEnvelope />
            <span>Contact us</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
