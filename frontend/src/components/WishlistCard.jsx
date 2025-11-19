// frontend/src/components/WishlistCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WishlistCard({ wishlist }) {
  return (
    <div className="wishlist-card">
      <h3 className="wishlist-title">{wishlist.title}</h3>
      <p className="wishlist-description">{wishlist.description}</p>
      <Link to={`/wishlist/${wishlist._id}`} className="wishlist-link">View</Link>
    </div>
  );
}


