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

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1>Your Wishlists</h1>

      {wishlists.length === 0 ? (
        <p>No wishlists yet.</p>
      ) : (
        <ul>
          {wishlists.map((w) => (
            <li key={w._id}>
              <strong>{w.title}</strong> — {w.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



