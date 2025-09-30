import React from "react";

const Features = () => {
  const features = [
    { emoji: "📝", title: "Create Smart Wishlists", text: "Build organized wishlists for any event - birthdays, holidays, graduations, or just because moments." },
    { emoji: "🔒", title: "Reserve Items", text: "Friends and family can secretly reserve items, eliminating duplicates and ensuring perfect surprises." },
    { emoji: "🤖", title: "AI-Powered Suggestions", text: "Get personalized gift recommendations based on personality, budget, interests, and occasion." },
    { emoji: "🌐", title: "Easy Sharing", text: "Share your wishlists with a simple link. No account required for gift-givers to view and reserve." },
    { emoji: "💝", title: "All Occasions", text: "Perfect for every celebration - not just weddings. Birthdays, holidays, achievements, and more." },
    { emoji: "♻️", title: "Reduce Waste", text: "Meaningful gifting means less waste, more value, and stronger connections between people." },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose Zawify?</h2>
        <p className="text-gray-600 dark:text-gray-300">Transform the way you give and receive gifts</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 text-center">
            <div className="text-5xl mb-4">{f.emoji}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
