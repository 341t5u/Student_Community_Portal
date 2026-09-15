import { useState, useEffect } from "react";

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("/src/data/resources.json")
      .then((res) => res.json())
      .then((data) => setResources(data));
  }, []);

  return (
    <div>
      <h1>Student Resources</h1>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {resources.map((res) => (
          <div
            key={res.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                background: "#e8f4f8",
                color: "#007bff",
                padding: "0.2rem 0.5rem",
                borderRadius: "4px",
                fontSize: "0.8rem",
              }}
            >
              {res.category}
            </span>
            <h3 style={{ margin: "0.5rem 0" }}>{res.title}</h3>
            <p>{res.description}</p>
            <a href={res.link} target="_blank" rel="noreferrer">
              Access Portal ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
