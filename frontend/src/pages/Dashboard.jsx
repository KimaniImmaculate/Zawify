// frontend/src/pages/Dashboard.jsx
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { getUserWishlists } from "../services/wishlistService.js";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    if (!user) return;

    getUserWishlists(user._id)
      .then((res) => setWishlists(res.wishlists))
      .catch((err) => console.error(err));
  }, [user]);

  if (!user) return <p className="loading-text">Loading...</p>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Wishlists</h1>

      {wishlists.length === 0 ? (
        <p className="dashboard-empty">No wishlists yet.</p>
      ) : (
        <ul className="wishlist-list">
          {wishlists.map((w) => (
            <li key={w._id} className="wishlist-item">
              <strong>{w.title}</strong> — {w.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}




