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
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await editWishlist(id, data);
    navigate("/dashboard");
  };

  return (
    <div className="p-5">
      <h1>Edit Wishlist</h1>
      <form onSubmit={handleUpdate}>
        <input
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <input
          value={data.description}
          onChange={(e) =>
            setData({ ...data, description: e.target.value })
          }
        />
        <button>Save</button>
      </form>
    </div>
  );
}

