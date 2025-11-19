import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Zawify ✨</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/ai" className="nav-link highlight">AI Suggestions</Link>
      </div>
    </nav>
  );
}




