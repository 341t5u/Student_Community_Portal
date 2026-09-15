// src/pages/Events.jsx
import { useState, useEffect } from "react";
import eventsData from "../data/events.json"; // Direct import

export default function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [rsvpStatus, setRsvpStatus] = useState({});

  useEffect(() => {
    setEvents(eventsData || []);
    setLoading(false);
  }, []);

  const handleRSVP = (eventId) => {
    setRsvpStatus((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  const filteredEvents = events.filter(
    (event) =>
      event.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "4rem" }}>
        ⏳ Loading upcoming events...
      </div>
    );

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: "800",
            marginBottom: "0.5rem",
          }}
        >
          Upcoming Events
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Find and register for activities across campus.
        </p>
      </div>

      <input
        type="text"
        placeholder="Filter events by title or venue..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", marginBottom: "2rem" }}
      />

      <div className="card-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="ui-card">
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: "700",
                color: "var(--primary)",
              }}
            >
              📅 {event.date}
            </span>
            <h3 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
              {event.name}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                flex: 1,
                marginBottom: "1rem",
              }}
            >
              📍 {event.location}
            </p>
            <button
              onClick={() => handleRSVP(event.id)}
              className={rsvpStatus[event.id] ? "btn-secondary" : "btn"}
              style={{ width: "100%" }}
            >
              {rsvpStatus[event.id] ? "✓ Attending" : "RSVP Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
