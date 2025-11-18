import { useState, useEffect } from "react";
import wishlistService from "../services/wishlistService";
import { useParams, useNavigate } from "react-router-dom";

function EditWishlist() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    wishlistService.getOne(id).then((res) => {
      setTitle(res.data.title);
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await wishlistService.update(id, { title });
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h2>Edit Wishlist</h2>

      <form style={styles.form} onSubmit={submit}>
        <input
          type="text"
          placeholder="Wishlist Name"
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button style={styles.btn}>Save Changes</button>
      </form>
    </div>
  );
}

const styles = {
  container: { width: "320px", margin: "30px auto" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px" },
  btn: { padding: "10px", background: "black", color: "white" },
};

export default EditWishlist;
