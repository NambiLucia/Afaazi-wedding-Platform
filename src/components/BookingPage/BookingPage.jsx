import React from 'react';
import EventForm from './EventForm';
import "./BookingPage.css"
import NavBar from "../NavBar";

function BookingPage() {
  const handleAddEvent = (eventData) => {
    console.log('New event data:', eventData);
  };

  return (
    <div className="booking-page">
      <NavBar />

      
      <main className="booking-content">
        <section className="providers">
          <div className="booking-card">
            <h2 className="booking-title">Make a Reservation</h2>
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
