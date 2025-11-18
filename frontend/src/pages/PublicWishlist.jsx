import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import wishlistService from "../services/wishlistService";
import ItemCard from "../components/ItemCard";

function PublicWishlist() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    wishlistService.getOne(id).then((res) => {
      setTitle(res.data.title);
      setItems(res.data.items);
    });
  }, [id]);

  return (
    <div style={styles.container}>
      <h2>{title}</h2>

      <div style={styles.grid}>
        {items.map((item) => (
          <ItemCard key={item._id} item={item} onWishlist={() => {}} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default PublicWishlist;
