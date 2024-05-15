import React, { useState } from 'react';
import './eventlist.css';

function EventList({ events }) {
  const [showTable, setShowTable] = useState(true);
  const [isSaving, setIsSaving] = useState(false); 

  const handleEdit = (index, eventData) => {
    console.log("Edit event at index:", index);
    handleSave(index, eventData);
  };

  const handleDelete = (index) => {
    console.log("Delete event at index:", index);
    const updatedEvents = events.filter((_, i) => i !== index);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const handleSave = (index, eventData) => {
    setIsSaving(true);
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    savedEvents[index] = eventData;
    localStorage.setItem('events', JSON.stringify(savedEvents));
    setTimeout(() => {
      setIsSaving(false);
      console.log("Event saved!");
      document.getElementById('download-button').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="event-list-container">
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
                  <button className="edit-button" onClick={() => handleEdit(index, event)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                  <button className="save-button" style={{ color: 'blue' }} onClick={() => handleSave(index, event)} disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={() => setShowTable(true)}>View List</button>
      )}
    </div>
  );
}

export default EventList;
