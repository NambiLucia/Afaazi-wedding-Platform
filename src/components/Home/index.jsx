import React from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import Services from "../Services";
import Vendors from "../Vendors";
import Contact from "../Contact";
import Footer from "../Footer";
import Login from "../Login/login";
import Bookingpage from '../BookingPage/BookingPage';
import Packages from "../Packages";
import "./home.css";


function Home () {
    return(
        <>
        <NavBar />
        <Hero />
        <Services />
        <Vendors />
        <Packages />
        <Contact />
        <Bookingpage />
        <Login />
        <Footer />
</>
        
        
    ) 
}

export default Home;