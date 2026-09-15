import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("/src/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((e) => e.id === id);
        setEvent(found);
      });
  }, [id]);

  if (!event) return <div>Loading event...</div>;

  return (
    <div>
      <button
        onClick={() => navigate("/events")}
        style={{ marginBottom: "1rem" }}
      >
        ← Back to Events
      </button>
      <h1>{event.name}</h1>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <div
        style={{
          background: "#f5f5f5",
          padding: "1rem",
          borderRadius: "6px",
          marginTop: "1rem",
        }}
      >
        <h3>Event Overview</h3>
        <p>{event.fullDetails}</p>
      </div>
    </div>
  );
}
