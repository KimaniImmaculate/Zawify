// frontend/src/pages/AiSuggestions.jsx
import { useState } from "react";

export default function AiSuggestions() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSuggestions = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error("Failed to get AI suggestions");

      const data = await res.json();
      setResults(data.suggestions || []);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="ai-container">
      <h2 className="ai-title">AI Gift Suggestions 🎁</h2>

      <input
        type="text"
        placeholder="Enter gift idea or recipient"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="ai-input"
      />
      <button onClick={getSuggestions} className="ai-button">
        Get Suggestions
      </button>

      {loading && <p className="ai-loading">Generating suggestions...</p>}

      <ul className="ai-results">
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

