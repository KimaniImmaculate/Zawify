import React from 'react';
import Hero from './components/Hero';
import CreateWishlist from './components/CreateWishlist';
import WishlistView from './components/WishlistView';

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 rounded p-2 text-purple-600">🎁</div>
          <h1 className="font-bold text-xl text-purple-600">Zawify</h1>
        </div>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full">Get Started</button>
      </header>

      <main className="px-8">
        <Hero />
        <CreateWishlist />
        <WishlistView />
      </main>
    </div>
  );
}



