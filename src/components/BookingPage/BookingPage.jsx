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
        
        </section>
        <section className="event-form-section">
          <EventForm onAddEvent={handleAddEvent}/>
        </section>
      </main>
      
    </div>

  );
}

export default BookingPage;
