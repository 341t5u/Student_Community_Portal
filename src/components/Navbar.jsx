import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const activeStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary)" : "var(--text-muted)",
    fontWeight: isActive ? "700" : "500",
    padding: "0.5rem 0.8rem",
    borderRadius: "var(--radius-sm)",
    background: isActive ? "var(--primary-light)" : "transparent",
    textDecoration: "none",
    transition: "var(--transition)",
  });

  return (
    <div className="navbar-wrapper">
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        {/* Brand Logo */}
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--accent))",
              color: "#fff",
              padding: "0.5rem 0.7rem",
              borderRadius: "var(--radius-md)",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            🎓
          </span>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "var(--text-main)",
              letterSpacing: "-0.03em",
            }}
          >
            Campus<span style={{ color: "var(--primary)" }}>Connect</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <NavLink to="/" style={activeStyle}>
            Home
          </NavLink>
          <NavLink to="/clubs" style={activeStyle}>
            Clubs
          </NavLink>
          <NavLink to="/events" style={activeStyle}>
            Events
          </NavLink>
          <NavLink to="/resources" style={activeStyle}>
            Resources
          </NavLink>
          <NavLink to="/about" style={activeStyle}>
            About
          </NavLink>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn-secondary"
            style={{
              marginLeft: "1rem",
              padding: "0.5rem 0.9rem",
              borderRadius: "20px",
            }}
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
    </div>
  );
}
