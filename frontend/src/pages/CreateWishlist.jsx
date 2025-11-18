import { useState } from "react";
import wishlistService from "../services/wishlistService";
import { useNavigate } from "react-router-dom";

function CreateWishlist() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await wishlistService.create({ title });
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h2>Create Wishlist</h2>

      <form style={styles.form} onSubmit={submit}>
        <input
          type="text"
          placeholder="Wishlist Name"
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button style={styles.btn}>Create</button>
      </form>
    </div>
  );
}

const styles = {
  container: { width: "300px", margin: "30px auto" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", border: "1px solid #ccc" },
  btn: { padding: "10px", background: "black", color: "white" },
};

export default CreateWishlist;
