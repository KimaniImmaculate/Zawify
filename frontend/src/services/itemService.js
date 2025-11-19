// frontend/src/services/itemService.js

const BASE_URL = "http://localhost:5000/api/items";

const itemService = {
  addItem: async (wishlistId, item) => {
    const res = await fetch(`${BASE_URL}/${wishlistId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return await res.json();
  },

  updateItem: async (itemId, data) => {
    const res = await fetch(`${BASE_URL}/${itemId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  deleteItem: async (itemId) => {
    const res = await fetch(`${BASE_URL}/${itemId}`, {
      method: "DELETE",
    });
    return await res.json();
  },
};

export default itemService;
