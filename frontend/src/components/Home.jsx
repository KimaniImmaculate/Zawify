import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Zawify 🎁</h1>
      <p>Create and share beautiful wishlists. No duplicates, no guesswork!</p>
      <Link to="/register" className="btn-primary">
        Get Started
      </Link>
    </div>
  );
}

