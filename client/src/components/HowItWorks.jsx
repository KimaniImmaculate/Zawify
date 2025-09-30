import React from "react";

const HowItWorks = () => {
  const steps = [
    { number: 1, title: "Create Your Wishlist", text: "Add items you'd love to receive, set price ranges, and include helpful notes for gift-givers." },
    { number: 2, title: "Share With Loved Ones", text: "Send a simple link to friends and family. They can view your list and reserve items secretly." },
    { number: 3, title: "Enjoy Perfect Gifts", text: "Receive exactly what you wanted while gift-givers feel confident in their thoughtful choices." },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-600 dark:text-gray-300">Three simple steps to stress-free gifting</p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {steps.map((s, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 text-center flex-1">
            <div className="text-3xl font-bold mb-2">{s.number}</div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
