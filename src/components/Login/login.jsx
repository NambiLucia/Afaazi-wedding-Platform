import React from "react";
import Footer from "../Footer"
import LoginForm from "./LoginForm"
import "./login.css"
import NavBar from "../NavBar";




function Login () {
    return (
        <> 
        <NavBar />
        
            <LoginForm />
            <Footer />
        </>


    )
}

export default Login;