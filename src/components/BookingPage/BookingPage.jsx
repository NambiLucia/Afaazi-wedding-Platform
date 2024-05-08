import React from 'react';
import EventForm from './EventForm';
import "./BookingPage.css"

function BookingPage() {
  const handleAddEvent = (eventData) => {
    console.log('New event data:', eventData);
  };

  return (
    <div className="booking-page">
      
      <main className="booking-content">
        <section className="providers">
          <div className="booking-card">
            <h2 className="booking-title">Make a Reservation</h2>
            <p className="booking-description">Fill out the form below to book your event.</p>
          </div>
        </section>
        <section className="event-form-section">
          <EventForm onAddEvent={handleAddEvent} />
        </section>
      </main>
      
    </div>
  );
}

export default BookingPage;
