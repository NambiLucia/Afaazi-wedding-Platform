import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './eventform.css';
import NavBar from '../NavBar';

const EventForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    telephone: '',
    eventDate: '',
    eventType: '',
    country: '',
    city: '',
    estimatedBudget: '',
    additionalInfo: '',
    vendorId: ''
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState, 
      [name]: value 
    }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch('http://localhost:5000/bookings/create-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...formData })
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      const result = await response.json();
      setSuccessMessage('Booking Successful! We will get in touch with you shortly.');
      
      // Reset form after success
      setFormData({
        username: '',
        fullname: '',
        email: '',
        telephone: '',
        eventDate: '', 
        eventType: '',
        country: '',
        city: '',
        estimatedBudget: '',
        additionalInfo: '',
        vendorId: ''
      });
    } catch (error) {
      setError(error.message);
    } 
    //finally {
      //setLoading(false); 
    //}
  };

  return (
    <div className="background-container">
      <div className="booking-container">
        <h2 className="form-title">Event Booking Form</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </label>

            <label>
              Full Name:
              <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Telephone:
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Event Date:
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
            </label>

            <label>
              Event Type:
              <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              Country:
              <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </label>
            <label>
              City:
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Estimated Budget (UGX):
              <input
                type="text"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Additional Information:
              <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
            </label>
            <label>
              Vendor number:
              <textarea name="vendorId" value={formData.vendorId} onChange={handleChange} />
            </label>
          </div>
          <div className="button-container">
            <button type="submit" disabled={loading}>
              {loading ? 'Booking...' : 'Book Event'}
            </button>
            <Link to="/bookingpage/eventlist">
              <button type="button">View Booked Events</button>
            </Link>
          </div>
          {error && <p className="error-message">Error: {error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
        <NavBar />
      </div>
    </div>
  );
};

export default EventForm;
