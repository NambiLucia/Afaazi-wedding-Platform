import React, { useState } from 'react';
import './eventform.css';
import axios from 'axios';

// Connecting front to backend
axios.get('http://localhost:1337/api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was an error!', error);
  });


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
    // Format value as money (e.g., 100000 -> 100,000)
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'UGX', // Ugandan Shilling currency code
      minimumFractionDigits: 0,
    });
    return formatter.format(value.replace(/\D/g, ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('bookingFormData', JSON.stringify(formData));
    const res = axios.post('http://localhost:1337/content-manager/collection-types/api::booking.booking', formData)
    

    console.log(res)
    //alert('Booking Successful! We will get in touch with you shortly.');
    // Clear form fields
  //  setFormData({
    //  fullName: '',
      //email: '',
      //contact: '',
      //eventDate: '',
      //eventCheckoutDate: '',
      //eventType: '',
      //country: '',
      //city: '',
      //additionalInfo: '',
      //estimatedBudget: '', 
    //});
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
          <button type="submit">Book Event</button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
