import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const CATEGORY_STYLES = {
  Technology: { bg: "rgba(37, 99, 235, 0.1)", text: "#2563eb" },
  Arts: { bg: "rgba(147, 51, 234, 0.1)", text: "#9333ea" },
  Sports: { bg: "rgba(22, 163, 74, 0.1)", text: "#16a34a" },
  Default: { bg: "rgba(100, 116, 139, 0.1)", text: "#64748b" },
};

export default function ClubCard({ club }) {
  const { favoriteClubs, toggleFavoriteClub } = useFavorites();
  const isFav = favoriteClubs?.includes(club.id);
  const tagStyle = CATEGORY_STYLES[club.category] || CATEGORY_STYLES.Default;

  return (
    <div className="ui-card">
      <div style={{ position: "relative", marginBottom: "1rem" }}>
        <img
          src={club.image}
          alt={club.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "var(--radius-md)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: tagStyle.bg,
            color: tagStyle.text,
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: "700",
          }}
        >
          {club.category}
        </span>
      </div>

      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
        }}
      >
        {club.name}
      </h3>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.92rem",
          flex: 1,
          marginBottom: "1.2rem",
          lineHeight: "1.5",
        }}
      >
        {club.description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "0.8rem",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <Link
          to={`/clubs/${club.id}`}
          style={{
            color: "var(--primary)",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          View Details →
        </Link>
        <button
          onClick={() => toggleFavoriteClub(club.id)}
          className="btn-secondary"
          style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
        >
          {isFav ? "❤️ Saved" : "🤍 Save"}
        </button>
      </div>
    </div>
  );
}
