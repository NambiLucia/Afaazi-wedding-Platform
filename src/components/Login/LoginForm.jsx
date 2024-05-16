
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage,setErrorMessage]=useState('');
   

    const handleSubmit = (event) => {
        event.preventDefault();
       if(email && password) {
        let apiUrl="http://localhost:1337/api/logins";
        let newLogin={ 
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(
                {data:{email,password}}
            )}
       }

  fetch("http://localhost:1337/api/logins", newLogin)
        .then((response) => {
            if(!response.ok) {
                throw new error("login failed")

            }
            return response.json()
        })
        .then((data) => {
            console.log("Login successful",data)
            setEmail("")
            setPassword("")
        })
        .catch((error) =>{
            console.error("Error:", error);
        })




    }// end of function
      

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
