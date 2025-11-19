// frontend/src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // make sure backend runs on 5000

const register = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data; // expects { user: {...} }
  } catch (err) {
    console.error(err.response?.data || err.message);
    return { error: err.response?.data?.error || "Registration failed" };
  }
};

const login = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data; // expects { user: {...} }
  } catch (err) {
    console.error(err.response?.data || err.message);
    return { error: err.response?.data?.error || "Login failed" };
  }
};

export default { register, login };


