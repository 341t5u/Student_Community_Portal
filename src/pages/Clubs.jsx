// src/pages/Clubs.jsx
import { useState, useEffect } from "react";
import ClubCard from "../components/ClubCard";
import clubsData from "../data/clubs.json"; // 1. Direct local import

export default function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // 2. Load data from the imported JSON file
  useEffect(() => {
    setClubs(clubsData || []);
    setLoading(false);
  }, []);

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Technology", "Arts", "Sports", "Academic"];

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "4rem" }}>
        ⏳ Loading clubs...
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: "800",
            marginBottom: "0.5rem",
          }}
        >
          Campus Organizations
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Explore and join active student groups on campus.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search clubs by name or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: "1 1 300px" }}
        />

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "btn" : "btn-secondary"}
              style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredClubs.length > 0 ? (
        <div className="card-grid">
          {filteredClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            color: "var(--text-muted)",
          }}
        >
          <h3>No clubs found matching your criteria.</h3>
        </div>
      )}
    </div>
  );
}
