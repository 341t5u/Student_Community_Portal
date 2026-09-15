// src/pages/Resources.jsx
import { useState, useEffect } from "react";
import resourcesData from "../data/resources.json";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  // Demonstrate useEffect state hydration
  useEffect(() => {
    // Simulates an async data load using local data
    const timer = setTimeout(() => {
      setResources(resourcesData || []);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "4rem" }}>
        ⏳ Loading resources...
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
          Student Resources
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Access key support services, tutoring centers, and academic tools.
        </p>
      </div>

      <div className="card-grid">
        {resources.map((res, index) => (
          <div key={res.id || index} className="ui-card">
            <span
              style={{
                backgroundColor: "var(--primary-light)",
                color: "var(--primary)",
                padding: "0.25rem 0.75rem",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: "700",
                display: "inline-block",
                marginBottom: "0.8rem",
                width: "fit-content",
              }}
            >
              {res.category || "General"}
            </span>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "0.5rem",
              }}
            >
              {res.title || res.name}
            </h3>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.92rem",
                flex: 1,
                marginBottom: "1.2rem",
              }}
            >
              {res.description}
            </p>

            {res.link && (
              <a
                href={res.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--primary)",
                  fontWeight: "700",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Access Portal ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
