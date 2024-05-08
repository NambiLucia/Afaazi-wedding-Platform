import React from "react";
import Footer from "../Footer"
import LoginForm from "./LoginForm"
import "./login.css"



function Login () {
    return (
        <> 
        
            <LoginForm title="Create An Events Account" type="organisation" />
            <Footer />
        </>


    )
}

export default Login;