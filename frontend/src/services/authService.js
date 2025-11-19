// frontend/src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const register = async (userData) => {
  try {
    const res = await axios.post(API_URL + "register", userData);
    return res.data; // contains user object + token
  } catch (error) {
    console.error(error);
    return { error: error.response?.data?.message || "Network error" };
  }
};

const login = async (userData) => {
  try {
    const res = await axios.post(API_URL + "login", userData);
    return res.data; // contains user object + token
  } catch (error) {
    console.error(error);
    return { error: error.response?.data?.message || "Network error" };
  }
};

export default { register, login };
