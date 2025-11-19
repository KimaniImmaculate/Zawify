// frontend/src/pages/EditWishlist.jsx
import { useEffect, useState } from "react";
import { editWishlist, getPublicWishlist } from "../services/wishlistService.js";
import { useParams, useNavigate } from "react-router-dom";

export default function EditWishlist() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    getPublicWishlist(id).then((res) =>
      setData({
        title: res.wishlist.title,
        description: res.wishlist.description,
      })
    );
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await editWishlist(id, data);
    navigate("/dashboard");
  };

  return (
    <div className="edit-wishlist-container">
      <h1 className="edit-wishlist-title">Edit Wishlist</h1>
      <form className="edit-wishlist-form" onSubmit={handleUpdate}>
        <input
          className="edit-wishlist-input"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          placeholder="Title"
        />
        <input
          className="edit-wishlist-input"
          value={data.description}
          onChange={(e) =>
            setData({ ...data, description: e.target.value })
          }
          placeholder="Description"
        />
        <button className="edit-wishlist-button">Save</button>
      </form>
    </div>
  );
}


