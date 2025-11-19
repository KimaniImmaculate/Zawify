// frontend/src/components/WishlistCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function WishlistCard({ wishlist }) {
  const navigate = useNavigate();

  return (
    <div className="wishlist-card">
      <h4>{wishlist.title}</h4>
      <p>{wishlist.description}</p>
      <div className="wishlist-buttons">
        <button onClick={() => navigate(`/wishlist/${wishlist._id}`)}>View</button>
        <button onClick={() => navigate(`/edit-wishlist/${wishlist._id}`)}>Edit</button>
      </div>
    </div>
  );
}

