import { useEffect, useState } from "react";
import { getPublicWishlist } from "../services/wishlistService.js";
import { useParams } from "react-router-dom";

export default function PublicWishlist() {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    getPublicWishlist(id).then((res) => setWishlist(res.wishlist));
  }, []);

  if (!wishlist) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1>{wishlist.title}</h1>
      <p>{wishlist.description}</p>

      <h3>Items</h3>
      {wishlist.items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        wishlist.items.map((i) => <p key={i._id}>{i.name}</p>)
      )}
    </div>
  );
}

