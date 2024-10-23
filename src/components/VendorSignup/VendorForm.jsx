
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registervendor.css";

function VendorForm() {
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && fullname && email && telephone && password && category) {
      try {
        const response = await fetch('http://localhost:5000/vendors/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: username,
            fullname:fullname,
            email: email,
            telephone:telephone,
            password: password,
            category:category
          }),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Signup successful!');
          setUsername("");
          setFullName("");
          setEmail("");
          setTelephone("");
          setPassword("");
          setCategory("");

          navigate('/Vendorlogin');

        } else {
          alert(`Failed to sign up: ${data.error.message}`);
        }
      } catch (error) {
        console.error('Error signing up:', error);
        alert('Error signing up');
      }
    } else {
      alert('Information missing!');
    }
  };

  return (
    <section className="vendor-register-section">
      <div className="vendor-registration-form">
        <h1>Vendor Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Fullname:</label>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

   <div className="form-group">
            <label>Telephone:</label>
            <input
              type="tel"
              name="telephone"
              value={telephone}
              //pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

         <div className="form-group">
            <label>Category:</label>
            <select 
             name="category"
             value={category}
             onChange={(e) => setCategory(e.target.value)}
             required>


            <option value="Make-up">Make-up</option>
            <option value="Hair">Hair</option>
            <option value="Photography & Videography">Photography & Videography</option>
            <option value="Decoration">Decoration</option>
            <option value="Catering">Catering</option>
            <option value="Car Hire">Car Hire</option>
            <option value="Venues">Venues</option>
        
              </select>
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

export default VendorForm;