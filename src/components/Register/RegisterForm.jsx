import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './register.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    location: '',
    gender: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Registration Successful!');
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="login-link">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterForm;
