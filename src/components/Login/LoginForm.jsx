// LoginForm.jsc
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        {email.length===0 || password.length===0? setErrorMessage("This is required") : ""}
        fetch("http://localhost:1337/api/auth/local",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({identifier:email,
                password:password
            })
        })
        .then((response) => {
            if(!response.ok) {
                throw new error("login failed")

            }
            return response.json()
        })
        .then((data) => {
            console.log("Login successful",data)
        })
        .catch((error) =>{
            setErrorMessage("theres an error")
        })




        /* Retrieve stored user data from local storage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            // Redirect to another page or perform further actions
        } else {
            setErrorMessage('Invalid email or password. Please try again.');
        }*/
    };

    return (
        <div className="loginformcontainer">
            <form onSubmit={handleSubmit}>
                <h2>Login to Afaazi</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="signup-option">
                <p>Don't have an account? <Link to="/register/SignUpForm">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
