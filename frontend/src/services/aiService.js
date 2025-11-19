// frontend/src/services/aiService.js

const BASE_URL = "http://localhost:5000/api/ai";

const aiService = {
  getSuggestions: async (query) => {
    const res = await fetch(`${BASE_URL}/suggestions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    return data.suggestions || [];
  },
};

export default aiService;
