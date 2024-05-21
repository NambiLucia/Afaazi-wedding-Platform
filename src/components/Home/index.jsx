import React from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import Services from "../Services";
import Vendors from "../Vendors";
import Contact from "../Contact";
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
    
</>
        
        
    ) 
}

export default Home;