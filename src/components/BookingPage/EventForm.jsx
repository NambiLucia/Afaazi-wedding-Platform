import React, { useState } from 'react';
import './BookingPage';
import EventList from './EventList';
import '../BookingPage/eventform.css'

function EventForm() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');
  const [budget, setBudget] = useState('');
  const [contacts, setContacts] = useState('');
  const [telephone, setTelephone] = useState('');
  const [category, setCategory] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [events, setEvents] = useState([]);

  const onAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddEvent({
        name: eventName,
        date: eventDate,
        venue: venue,
        budget: budget,
        contacts: contacts,
        telephone: telephone,
        category: category
      });
      setEventName('');
      setEventDate('');
      setVenue('');
      setBudget('');
      setContacts('');
      setTelephone('');
      setCategory('');
      setFormErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!eventName.trim()) {
      errors.eventName = 'Event name is required';
      isValid = false;
    }

    if (!eventDate) {
      errors.eventDate = 'Event date is required';
      isValid = false;
    }

    if (!venue.trim()) {
      errors.venue = 'Venue location is required';
      isValid = false;
    }

    if (!budget.trim()) {
      errors.budget = 'Budget is required';
      isValid = false;
    }

    if (!contacts.trim()) {
      errors.contacts = 'Contacts (email address) is required';
      isValid = false;
    }

    if (!telephone.trim()) {
      errors.telephone = 'Telephone number is required';
      isValid = false;
    }

    if (!category.trim()) {
      errors.category = 'Category is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          {formErrors.eventName && <span className="error">{formErrors.eventName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          {formErrors.eventDate && <span className="error">{formErrors.eventDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="venue">Venue Location:</label>
          <select
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          >
            <option value="">Select a venue</option>
            <option value="Gardens">Gardens</option>
            <option value="Hall">Hall</option>
            <option value="Lake Shores">Lake shores</option>
          </select>
          {formErrors.venue && <span className="error">{formErrors.venue}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget (UGX):</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          {formErrors.budget && <span className="error">{formErrors.budget}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="contacts">Contacts (Email Address):</label>
          <input
            type="email"
            id="contacts"
            value={contacts}
            onChange={(e) => setContacts(e.target.value)}
          />
          {formErrors.contacts && <span className="error">{formErrors.contacts}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Telephone Number:</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          {formErrors.telephone && <span className="error">{formErrors.telephone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Religious">Religious</option>
            <option value="Traditional">Traditional</option>
            <option value="Civil">Civil</option>
          </select>
          {formErrors.category && <span className="error">{formErrors.category}</span>}
        </div>
        <button type="submit">Add Event</button>
      </form>
      <EventList events={events} /></>

  );
}

export default EventForm;
