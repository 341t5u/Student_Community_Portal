import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,
          padding: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          borderTop: "1px solid #ccc",
        }}
      >
        <p>© 2026 CampusConnect Student Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
