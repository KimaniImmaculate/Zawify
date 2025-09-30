import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <h2 className="text-xl font-bold">Zawify</h2>
      <div className="flex gap-4 items-center">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">Problem</button>
        <button className="hover:underline">Features</button>
        <button className="hover:underline">How It Works</button>
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Contact Us</button>
        <button className="ml-2">🌙 Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
