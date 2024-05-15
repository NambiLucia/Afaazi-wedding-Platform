import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import RegisterForm from "./RegisterForm";
import "./register.css"

function Register ()  {
    return (
        <>
            <NavBar />
            <RegisterForm  />
            <Footer />
        </>
    )
}

export default Register;