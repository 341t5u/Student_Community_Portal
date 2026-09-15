import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>
        Oops! The campus page you are looking for does not exist or has been
        moved.
      </p>
      <Link to="/" style={{ color: "#007bff", fontWeight: "bold" }}>
        Return to Home Page
      </Link>
    </div>
  );
}
