import React, { useState } from 'react';
import './BookingPage'

function EventList({ events }) {
  const [showTable, setShowTable] = useState(true);

  const handleEdit = (index) => {
    // Handle edit functionality here
    console.log("Edit event at index:", index);
  };

  const handleDelete = (index) => {
    // Handle delete functionality here
    console.log("Delete event at index:", index);
  };

  return (
    <div>
      {showTable ? (
        <div>
          <button onClick={() => setShowTable(false)}>Close All Booking</button>
          <div className="event-table-wrapper">
            {events.map((event, index) => (
              <div key={index} className="event-table-container">
                <h3>{event.name}</h3>
                <table className="event-table">
                  <tbody>
                    <tr>
                      <td><strong>Event Date:</strong></td>
                      <td>{event.date}</td>
                    </tr>
                    <tr>
                      <td><strong>Venue:</strong></td>
                      <td>{event.venue}</td>
                    </tr>
                    <tr>
                      <td><strong>Budget:</strong></td>
                      <td>{event.budget} Shillings</td>
                    </tr>
                    <tr>
                      <td><strong>Contacts:</strong></td>
                      <td>{event.contacts}</td>
                    </tr>
                    <tr>
                      <td><strong>Telephone:</strong></td>
                      <td>{event.telephone}</td>
                    </tr>
                    <tr>
                      <td><strong>Category:</strong></td>
                      <td>{event.category}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={() => setShowTable(true)}>Booking List</button>
      )}
    </div>
  );
}

export default EventList;
