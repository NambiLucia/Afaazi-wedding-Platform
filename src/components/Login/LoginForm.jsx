
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
   

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email && password) { 
        let apiUrl="http://https://afaazi-backend.onrender.com/api/logins";
    
        let newLoginObj={ 
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(
                {data:{email,password}}
            )};

  fetch(apiUrl, newLoginObj)
 .then((response) => {
            
            return response.json()
        })

.then((data) => {
            console.log("Login successful",data)
            setEmail("")
            setPassword("")
        })

       } else{alert("Logins missing")}


    }

 

    return (
        <section>

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
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
           
            <div className="signup-option">
                <p>Don't have an account? <Link to="/register/SignUpForm">Sign Up</Link></p>
            </div>
        </div>

</section>

    );
};

export default LoginForm;
