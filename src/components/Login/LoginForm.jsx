import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (username && password) {
            const apiUrl = "https://afaazi-server.onrender.com/couples/login";

            const newLoginObj = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password
                })
            };

            try {
                const response = await fetch(apiUrl, newLoginObj);
                const data = await response.json();
             

                if (response.ok) {
                    console.log("Login successful", data);

                    //store token in local storage

                 localStorage.setItem('authToken',data.coupleToken)
                    // Optionally log the token
                console.log('Stored token:', data.coupleToken);

                    setUsername('');
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
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="username-input"
                           
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
                    <p>Don't have an account?</p>
                    <p><Link to="/register">Sign Up as a <strong>Couple</strong></Link> OR <Link to="/vendorregister"><strong>Vendor</strong></Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;