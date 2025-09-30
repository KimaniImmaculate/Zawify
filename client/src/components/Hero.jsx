import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-20 px-5 max-w-6xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Gifting Made Simple</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          End the stress of duplicate gifts and unwanted presents. Zawify makes gifting meaningful and perfectly tailored to every occasion.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="btn-primary">Create Wishlist</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 w-80">
          <div className="text-5xl mb-2 text-center">🎁</div>
          <h3 className="text-xl font-bold mb-4 text-center">My Birthday Wishlist</h3>
          <div className="space-y-2">
            <div className="flex justify-between bg-gray-100 dark:bg-gray-600 p-2 rounded"> 
              <span>Wireless Headphones</span> <span className="text-sm text-red-500">Reserved</span>
            </div>
            <div className="flex justify-between bg-gray-100 dark:bg-gray-600 p-2 rounded">
              <span>Coffee Maker</span> <span className="text-sm text-green-500">Available</span>
            </div>
            <div className="flex justify-between bg-gray-100 dark:bg-gray-600 p-2 rounded">
              <span>Art Supplies</span> <span className="text-sm text-yellow-400">AI Suggested</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
