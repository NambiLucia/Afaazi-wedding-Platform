import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import "./eventlist.css";
import { jwtDecode } from "jwt-decode";

const EventList = () => {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching all events");

    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    const decoded = jwtDecode(authToken);
    console.log(decoded.id);
    const coupleId = decoded.id;

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/bookings/couple/${coupleId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
          
        }

        const data = await response.json();
        console.log("Fetched event list:", data); // Log the fetched data
        setEventList(data.bookings);
      } catch (err) {
        console.error("Error fetching events:", err); // Log error details
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="event-list-page">
      <div className="event-list-container">
        <h2 className="event-list-title">Event List for Couple</h2>
        {eventList && eventList.length > 0 ? (
          <div className="event-details">
            <table className="event-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Telephone</th>
                  <th>Event Date</th>
                  <th>Event Type</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Estimated Budget</th>
                  <th>Additional Information</th>
                  <th>Vendor Booked</th>
                </tr>
              </thead>
              <tbody>
                {eventList.map((event, index) => (
                  <tr key={index}>
                    <td>{event.fullname}</td>
                    <td>{event.email}</td>
                    <td>{event.telephone}</td>
                    <td>{new Date(event.eventDate).toLocaleDateString()}</td>
                    <td>{event.eventType}</td>
                    <td>{event.country}</td>
                    <td>{event.city}</td>
                    <td>{event.estimatedBudget}</td>
                    <td>{event.additionalInfo}</td>
                    <td>{event.vendor.fullname || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No events booked yet.</p>
        )}
        <div className="button-container">
          <Link to="/" className="book-event-link">
            <button className="book-event-button">Close Event</button>
          </Link>
          <Link to="/bookingpage/eventform" className="book-event-link">
            <button className="book-event-button">Book Event</button>
          </Link>
        </div>
        <NavBar />
      </div>
    </section>
  );
};

export default EventList;
