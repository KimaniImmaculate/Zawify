import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Zawify 🎁</h1>
      <p>Create and share beautiful wishlists. No duplicates, no guesswork!</p>
      <Link
        to="/register"
        style={{
          backgroundColor: "#8B5E3C",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
        }}
      >
        Get Started
      </Link>
    </div>
  );
}
