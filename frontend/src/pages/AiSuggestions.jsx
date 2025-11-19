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
    <div className="container">
      <h2>AI Gift Suggestions 🎁</h2>

      <input
        type="text"
        placeholder="Enter gift idea or recipient"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={getSuggestions}>Get Suggestions</button>

      {loading && <p>Generating suggestions...</p>}

      <ul>
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
