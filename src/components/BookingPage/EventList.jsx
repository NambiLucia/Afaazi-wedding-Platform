import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import NavBar from '../NavBar';
import './eventlist.css';

const EventList = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('bookingFormData');
    if (data) {
      setEventData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="event-list-container">
      <h2 className="event-list-title">Event List</h2>
      {eventData ? (
        <div className="event-details">
          <p><strong>Full Name:</strong> {eventData.fullName}</p>
          <p><strong>Email:</strong> {eventData.email}</p>
          <p><strong>Contact:</strong> {eventData.contact}</p>
          <p><strong>Event Date:</strong> {eventData.eventDate}</p>
          <p><strong>Checkout Date:</strong> {eventData.eventCheckoutDate}</p>
          <p><strong>Event Type:</strong> {eventData.eventType}</p>
          <p><strong>Country:</strong> {eventData.country}</p>
          <p><strong>City:</strong> {eventData.city}</p>
          <p><strong>Estimated Budget:</strong> {eventData.estimatedBudget}</p>
          <p><strong>Additional Information:</strong> {eventData.additionalInfo}</p>
        </div>
      ) : (
        <p>No event data available.</p>
      )}
      <Link to="/bookingpage/eventform" className="book-event-link">
        <button className="book-event-button">Close Event</button>
      </Link>
      <NavBar/>
    </div>
  );
};

export default EventList;
