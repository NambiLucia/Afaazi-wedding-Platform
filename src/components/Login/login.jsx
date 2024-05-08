import React from "react";
import Footer from "../Footer"
import LoginForm from "./LoginForm"
import "./login.css"
import NavBar from "../NavBar";


function Login () {
    return (
        <> 
        <NavBar />
            <LoginForm title="Create An Events Account" type="organisation" />
            <Footer />
        </>


    )
}

export default Login;