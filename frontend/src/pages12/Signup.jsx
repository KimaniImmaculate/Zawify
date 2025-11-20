// ...existing code...
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const base = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const signup = async (e) => {
    e?.preventDefault();
    if (!email || !password) {
      alert("Email and password required");
      return;
    }
    setLoading(true);
    try {
      // adjust path to /api/auth/signup or /api/auth/register depending on your backend
      await axios.post(`${base}/api/auth/register`, { email, password }, { headers: { "Content-Type": "application/json" } });
      navigate("/create");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      alert(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl mb-4 font-bold">Create Account</h1>

      <form onSubmit={signup}>
        <input
          placeholder="Email"
          className="border p-2 w-64 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          placeholder="Password"
          type="password"
          className="border p-2 w-64 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" disabled={loading} className="bg-black text-white px-6 py-2 rounded-xl">
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
