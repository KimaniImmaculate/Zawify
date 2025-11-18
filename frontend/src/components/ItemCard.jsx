import { Link } from "react-router-dom";

function ItemCard({ item, onWishlist }) {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />

      <h3>{item.name}</h3>
      <p>KES {item.price}</p>

      <div style={styles.actions}>
        <Link to={`/product/${item._id}`} style={styles.viewBtn}>
          View
        </Link>

        <button style={styles.wishlistBtn} onClick={() => onWishlist(item._id)}>
          ❤️
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    width: "220px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  viewBtn: {
    padding: "8px 12px",
    background: "#222",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
  wishlistBtn: {
    padding: "8px 12px",
    borderRadius: "5px",
    background: "#ff4081",
    color: "white",
    border: "none",
  },
};

export default ItemCard;
