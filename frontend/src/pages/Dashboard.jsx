import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import wishlistService from "../services/wishlistService";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    wishlistService.getAll().then((res) => setCount(res.data.length));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Welcome, {user?.name}</h2>

      <div style={styles.card}>
        <h3>Wishlists Created</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    width: "250px",
    borderRadius: "10px",
    marginTop: "20px",
  },
};

export default Dashboard;
