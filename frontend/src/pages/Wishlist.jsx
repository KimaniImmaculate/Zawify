// frontend/src/components/WishlistCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function WishlistCard({ wishlist }) {
  const navigate = useNavigate();

  return (
    <div className="wishlist-card" style={cardStyle}>
      <h4>{wishlist.title}</h4>
      <p>{wishlist.description}</p>
      <div style={buttonContainerStyle}>
        <button onClick={() => navigate(`/wishlist/${wishlist._id}`)}>View</button>
        <button onClick={() => navigate(`/edit-wishlist/${wishlist._id}`)}>Edit</button>
      </div>
    </div>
  );
}

// Simple inline styling (replace with CSS classes if you prefer)
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "1rem",
  margin: "0.5rem",
  width: "200px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "0.5rem",
};
