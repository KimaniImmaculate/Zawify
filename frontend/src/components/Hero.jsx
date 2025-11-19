import React from 'react';

// Using your uploaded screenshots as hero images. Replace with /public/hero1.png in production.
const HERO_IMG = '/mnt/data/Screenshot 2025-11-19 225255.png';

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12">
      <div>
        <h2 className="text-5xl font-extrabold mb-4">
          Turn presents into <span className="text-purple-600">thoughtful moments</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Create beautiful wishlists, share them with loved ones, and let them claim gifts in real-time.
          No more duplicate presents, just perfect surprises.
        </p>
        <a href="#create" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full">Create Your Wishlist</a>
      </div>
      <div className="flex justify-center">
        <img src={HERO_IMG} alt="hero" className="rounded-xl shadow-lg max-h-96 object-cover" />
      </div>
    </section>
  );
}
