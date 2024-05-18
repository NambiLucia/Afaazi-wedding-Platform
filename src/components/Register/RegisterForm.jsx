import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length!==0 && email.length!==0  &&
      contact.length!==0 &&location.length!==0 &&
      gender.length!==0 && dob.length!==0 ) { 
       
  
      const registerUrl = "http://localhost:1337/api/registers";
      const registerObj = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: { 
          name,email,contact,location,gender,dob
         } }),
      };

      fetch(registerUrl, registerObj)
        .then((response) => {
          if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
          return response.json();
        })

        .then((data) => {
          console.log("Registration successful", data);
          setName("");
          setEmail("");
          setContact("");
          setLocation("");
          setGender("");
          setDob("");
          setErrorMessage('');
          
        })
        .catch((error) => {
          setErrorMessage("Registration failed: " + error.message);
          
        });
     
      
    } else {
      
      setErrorMessage("All fields are required");
    }
  };

  return (
    <section className="register-section">
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
            required
          />
          
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={contact}
            onChange={(e) =>setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) =>setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) =>setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) =>setDob(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          Register
        </button>
      </form>
      <div className="login-link">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

    </div>

    </section>
  );
}

export default RegisterForm;
