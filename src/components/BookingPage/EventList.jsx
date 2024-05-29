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
    <section className="Eventlist-page">
    <div className="event-list-container">
      <h2 className="event-list-title">Event List</h2>
      {eventData ? (
        <div className="event-details">
          <table className="event-table">
            <tbody>
              <tr>
                <td><strong>Full Name:</strong></td>
                <td>{eventData.fullName}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{eventData.email}</td>
              </tr>
              <tr>
                <td><strong>Contact:</strong></td>
                <td>{eventData.contact}</td>
              </tr>
              <tr>
                <td><strong>Event Date:</strong></td>
                <td>{eventData.eventDate}</td>
              </tr>
              <tr>
                <td><strong>Checkout Date:</strong></td>
                <td>{eventData.eventCheckoutDate}</td>
              </tr>
              <tr>
                <td><strong>Event Type:</strong></td>
                <td>{eventData.eventType}</td>
              </tr>
              <tr>
                <td><strong>Country:</strong></td>
                <td>{eventData.country}</td>
              </tr>
              <tr>
                <td><strong>City:</strong></td>
                <td>{eventData.city}</td>
              </tr>
              <tr>
                <td><strong>Estimated Budget:</strong></td>
                <td>{eventData.estimatedBudget}</td>
              </tr>
              <tr>
                <td><strong>Additional Information:</strong></td>
                <td>{eventData.additionalInfo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No event data available.</p>
      )}
      <Link to="/" className="book-event-link">
        <button className="book-event-button">Close Event</button>
      </Link>
      <Link to="/bookingpage/eventform" className="book-event-link">
        <button className="book-event-button">Book Event</button>
      </Link>
      <NavBar/>
      
    </div>
    </section>
  );
};

export default EventList;
