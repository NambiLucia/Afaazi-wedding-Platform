import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './eventform.css';
import NavBar from '../NavBar';

const EventForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    eventDate: '',
    eventCheckoutDate: '',
    eventType: '',
    country: '',
    city: '',
    additionalInfo: '',
    estimatedBudget: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'estimatedBudget' ? formatMoney(value) : value,
    }));
  };

  const formatMoney = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    });
    return formatter.format(value.replace(/\D/g, ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('bookingFormData', JSON.stringify(formData));
    alert('Booking Successful! We will get in touch with you shortly.');
    setFormData({
      fullName: '',
      email: '',
      contact: '',
      eventDate: '',
      eventCheckoutDate: '',
      eventType: '',
      country: '',
      city: '',
      additionalInfo: '',
      estimatedBudget: '', 
    });
  };

  return (
    <div className="background-container">
      <div className="booking-container">
        <h2 className="form-title">Event Booking Form</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Full Name:
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Contact:
              <input 
                type="tel" 
                name="contact" 
                value={formData.contact} 
                onChange={handleChange} 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                required 
                title="Please enter a valid phone number (e.g., 123-456-7890)" 
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Event Date:
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
            </label>
            <label>
              Checkout Date:
              <input type="date" name="eventCheckoutDate" value={formData.eventCheckoutDate} onChange={handleChange} required />
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
                title="Please enter a valid amount" 
                required 
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Additional Information:
              <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
            </label>
          </div>
          <div className="button-container">
            <button type="submit">Book Event</button>
            <Link to="/bookingpage/eventlist">
              <button type="button">View Booked Events</button>
            </Link>
          </div>
        </form>
        <NavBar/>
      </div>
    </div>
  );
};

export default EventForm;
