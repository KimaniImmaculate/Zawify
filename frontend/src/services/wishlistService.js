import axios from "axios";

const API_URL = "http://localhost:5000/api/wishlists";

export const getUserWishlists = async (userId) => {
  const res = await axios.get(`${API_URL}/user/${userId}`);
  return res.data;
};

export const createWishlist = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const editWishlist = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const getPublicWishlist = async (id) => {
  const res = await axios.get(`${API_URL}/public/${id}`);
  return res.data;
};


