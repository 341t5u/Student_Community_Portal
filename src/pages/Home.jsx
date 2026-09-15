import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background:
            "linear-gradient(135deg, var(--primary-light) 0%, transparent 100%)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-color)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            lineHeight: "1.2",
          }}
        >
          Connect, Engage & Excel <br /> on Your Campus
        </h1>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
          }}
        >
          Discover vibrant organizations, upcoming events, and official student
          support services—all in one unified community platform.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link to="/clubs" className="btn">
            Explore Clubs →
          </Link>
          <Link to="/events" className="btn btn-secondary">
            Upcoming Events 📅
          </Link>
        </div>
      </section>

      {/* Feature Section Grid */}
      <section style={{ marginTop: "3.5rem" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
          }}
        >
          Quick Student Portals
        </h2>
        <p style={{ color: "var(--text-muted)" }}>
          Instant access to key academic and social resources.
        </p>

        <div className="card-grid">
          <div className="ui-card">
            <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📚</span>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "0.5rem",
              }}
            >
              Academic Support
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                flex: 1,
                marginBottom: "1rem",
              }}
            >
              Access peer tutoring, digital library catalogs, and open study
              spaces.
            </p>
            <Link
              to="/resources"
              style={{
                color: "var(--primary)",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Access Services →
            </Link>
          </div>

          <div className="ui-card">
            <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💼</span>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "0.5rem",
              }}
            >
              Career Services
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                flex: 1,
                marginBottom: "1rem",
              }}
            >
              Build resumes, schedule mock interviews, and land top summer
              internships.
            </p>
            <Link
              to="/resources"
              style={{
                color: "var(--primary)",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Explore Jobs →
            </Link>
          </div>

          <div className="ui-card">
            <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎉</span>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "0.5rem",
              }}
            >
              Campus Life
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                flex: 1,
                marginBottom: "1rem",
              }}
            >
              Join over 50+ student-led groups, hackathons, and cultural
              festivals.
            </p>
            <Link
              to="/clubs"
              style={{
                color: "var(--primary)",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Find Your Club →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
