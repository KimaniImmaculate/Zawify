// frontend/src/pages/CreateWishlist.jsx
import { useState, useContext } from "react";
import { createWishlist } from "../services/wishlistService.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function CreateWishlist() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createWishlist({
      owner: user._id,
      title,
      description,
    });

    navigate("/dashboard");
  };

  return (
    <div className="create-wishlist-container">
      <h1 className="create-wishlist-title">Create Wishlist</h1>

      <form onSubmit={handleSubmit} className="create-wishlist-form">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="create-wishlist-input"
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="create-wishlist-input"
        />

        <button type="submit" className="create-wishlist-button">
          Create
        </button>
      </form>
    </div>
  );
}
