// frontend/src/components/WishlistCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WishlistCard({ wishlist }) {
  return (
    <div className="wishlist-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}>
      <h3>{wishlist.title}</h3>
      <p>{wishlist.description}</p>
      <Link to={`/wishlist/${wishlist._id}`}>View</Link>
    </div>
  );
}

