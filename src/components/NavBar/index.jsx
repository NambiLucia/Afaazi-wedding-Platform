
import React from "react";
import "./navbar.css";

function NavBar () {
    return (
        <div className="topnav">
            
            <a className="active" href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <div className="topnav-right">
            <a href="/bookingpage">Book wedding</a> 
            <a href="/login">Login</a>  
           
                             
            </div>
        </div>

    )
}

export default NavBar;