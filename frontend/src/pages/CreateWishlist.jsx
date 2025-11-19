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
    <div className="p-5">
      <h1>Create Wishlist</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Create</button>
      </form>
    </div>
  );
}

