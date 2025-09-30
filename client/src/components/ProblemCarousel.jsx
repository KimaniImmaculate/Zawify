import React from "react";

const Problems = () => {
  const problems = [
    { emoji: "😰", text: "Stress from not knowing what to buy" },
    { emoji: "📦", text: "Duplicate gifts that go unused" },
    { emoji: "💸", text: "Money wasted on unwanted items" },
    { emoji: "🗑️", text: "Environmental waste from poor choices" },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">The Gift-Giving Problem</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 w-60">
              <div className="text-4xl mb-2">{p.emoji}</div>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;
