import React from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import About from "../About";
import Service from "../Service";
import Contact from "../Contact";
import Footer from "../Footer";
import Login from "../Login/login";
import Bookingpage from '../BookingPage/BookingPage'
import "./home.css";


function Home () {
    return(
        <>
        <NavBar />
        <Hero />
        <About />
        <Service />
        <Contact />
        <Bookingpage />
        <Login />
        <Footer />
</>
        
        
    ) 
}

export default Home;