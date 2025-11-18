import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#8B5E3C",
        color: "white",
        padding: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link to="/" style={{ color: "white" }}>Zawify</Link>
      <Link to="/ai" style={{ color: "white" }}>AI Suggestions</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
    </nav>
  );
}

