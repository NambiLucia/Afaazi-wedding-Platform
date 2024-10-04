import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./eventform.css";
import NavBar from "../NavBar";

const EventForm = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [vendorId, setVendorId] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    const coupleToken = localStorage.getItem("authToken");
    console.log("auth Token:", coupleToken); // Add this for debugging

    if (!coupleToken) {
      alert("No authentication token found. Please log in.");
      setLoading(false);
      return;
    }

    if (
      username &&
      fullname &&
      email &&
      telephone &&
      eventDate &&
      eventType &&
      country &&
      city &&
      estimatedBudget &&
      additionalInfo &&
      vendorId
    ) {
      const apiUrl = "http://localhost:5000/bookings/create-booking";

      const parsedVendorId = parseInt(vendorId, 10);

      // Prepare request options
      const newBookingObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${coupleToken}`,
        },
        body: JSON.stringify({
          username,
          fullname,
          email,
          telephone,
          eventDate,
          eventType,
          country,
          city,
          estimatedBudget,
          additionalInfo,
          vendorId: parsedVendorId,
        }),
      };

      console.log(
        JSON.stringify({
          username,
          fullname,
          email,
          telephone,
          eventDate,
          eventType,
          country,
          city,
          estimatedBudget,
          additionalInfo,
          vendorId,
        })
      );

      try {
        const response = await fetch(apiUrl, newBookingObj);
        const data = await response.json();

        if (response.ok) {
           // slug
          localStorage.setItem('slug',data.slug)
        
      console.log('Stored slug:', data.slug);


          console.log("Booking successful", data);

     

          setUsername("");
          setFullname("");
          setEmail("");
          setTelephone("");
          setEventDate("");
          setEventType("");
          setCountry("");
          setCity("");
          setEstimatedBudget("");
          setAdditionalInfo("");
          setVendorId("");

          setSuccessMessage("Booking created successfully!");

          // navigate('/EventList');
        } else {
          console.error("Failed to create booking:", data);
          alert("Failed to create booking: ", data.message || "Unknown error");
        }
      } catch (error) {
        console.error("Error booking your event:", error);
        alert("Error booking your event: ", error.message);
      }
    } else {
      alert("Please fill in all Booking fields");
    }

    setLoading(false);
  };

  return (
    <div className="background-container">
      <div className="booking-container">
        <h2 className="form-title">Event Booking Form</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>

            <label>
              Full Name:
              <input
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Telephone:
              <input
                type="tel"
                name="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Event Date:
              <input
                type="date"
                name="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </label>

            <label>
              Event Type:
              <select
                name="eventType"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                required
              >
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
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Estimated Budget (UGX):
              <input
                type="number"
                name="estimatedBudget"
                value={estimatedBudget}
                onChange={(e) => setEstimatedBudget(e.target.value)}
                required
              />
            </label>

            <label>
              Vendor number:
              <input
                name="vendorId"
                type="number"
                value={vendorId}
                onChange={(e) => setVendorId(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Additional Information:
              <textarea
                name="additionalInfo"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="button-container">
            <button type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Event"}
            </button>
            <Link to="/bookingpage/eventlist">
              <button type="button">View Booked Events</button>
            </Link>
          </div>

          {error && <p className="error-message">Error: {error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
        <NavBar />
      </div>
    </div>
  );
};

export default EventForm;
