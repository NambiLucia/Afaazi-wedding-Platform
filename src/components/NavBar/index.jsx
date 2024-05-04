
import React from "react";
import "./navbar.css";

function NavBar () {
    return (
        <div className="topnav">
            
            <a className="active" href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/#vendors">Vendors</a>
            <a href="/#packages">Packages</a>
            <a href="/gallery">Gallery</a> 
            <div className="topnav-right">
            <a href="/bookingpage">Book wedding</a> 
            <a href="/login">Login</a>  
           
                             
            </div>
        </div>

    )
}

export default NavBar;