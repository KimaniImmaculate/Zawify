function WishlistCard({ item, onRemove }) {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />

      <h3>{item.name}</h3>
      <p>KES {item.price}</p>

      <button style={styles.removeBtn} onClick={() => onRemove(item._id)}>
        Remove
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  removeBtn: {
    padding: "8px 12px",
    marginTop: "10px",
    background: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    width: "100%",
  },
};

export default WishlistCard;
