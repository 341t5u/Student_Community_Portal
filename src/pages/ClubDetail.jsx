import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ClubDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/clubs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setClub(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading details...</div>;
  if (!club)
    return (
      <div>
        Club not found.{" "}
        <button onClick={() => navigate("/clubs")}>Back to Clubs</button>
      </div>
    );

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
        ← Go Back
      </button>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <img
          src={club.image}
          alt={club.name}
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h1 style={{ marginTop: "1rem" }}>{club.name}</h1>
        <p>
          <strong>Category:</strong> {club.category}
        </p>
        <p>
          <strong>Description:</strong> {club.description}
        </p>
        <p>
          <strong>Meeting Schedule:</strong> {club.meetingInfo}
        </p>
        <p>
          <strong>Active Members:</strong> {club.membersCount}
        </p>
      </div>
    </div>
  );
}
