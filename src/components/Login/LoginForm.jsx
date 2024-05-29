import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (identifier && password) {
            const apiUrl = "http://localhost:1337/api/auth/local";

            const newLoginObj = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier,
                    password
                })
            };

            try {
                const response = await fetch(apiUrl, newLoginObj);
                const data = await response.json();

                if (response.ok) {
                    console.log("Login successful", data);
                    setIdentifier('');
                    setPassword('');
                 
                    navigate('/BookingPage');
                } else {
                    alert("Login failed: ");
                }
            } catch (error) {
                console.error('Error logging in:', error);
                alert('Error logging in');
            }
        } else {
            alert("Please fill in all fields");
        }
    }

    return (
        <section className="login-page">
            <div className="loginformcontainer">

                <form onSubmit={handleSubmit}>
                    <h2>Login to Afaazi</h2>
                    <div className="form-group">
                        <label htmlFor="identifier">Email:</label>
                        <input
                            type="text"
                            id="identifier"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
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
                <div className="signup-option">
                    <p>Don't have an account? <Link to="/register/SignUpForm">Sign Up</Link></p>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
