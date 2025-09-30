import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [formResponse, setFormResponse] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setFormResponse("Please fill out all fields.");
      return;
    }

    setFormResponse("Thanks for reaching out! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className={darkMode ? "dark dark-mode" : ""}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100">
        {/* Navbar */}
        <nav className="navbar fixed top-0 w-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-600 z-50">
          <div className="nav-container mx-auto max-w-6xl px-5 flex justify-between items-center h-[70px]">
            <h2 className="logo text-2xl font-bold text-purple-500 dark:text-gray-100">Zawify</h2>
            <div className="nav-links flex items-center gap-8">
              <a href="#hero" className="text-gray-800 dark:text-gray-100 hover:text-purple-500 font-medium">Home</a>
              <a href="#problems" className="text-gray-800 dark:text-gray-100 hover:text-purple-500 font-medium">Problem</a>
              <a href="#features" className="text-gray-800 dark:text-gray-100 hover:text-purple-500 font-medium">Features</a>
              <button
                className="btn-primary px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                onClick={() => setShowGetStarted(true)}
              >
                Get Started
              </button>
              <button
                className="btn-secondary px-6 py-3 border-2 border-purple-500 dark:border-gray-100 text-purple-500 dark:text-gray-100 hover:bg-purple-500 dark:hover:bg-purple-500 hover:text-white dark:hover:text-gray-800 rounded-lg"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
              <button
                className="btn-secondary px-6 py-3 border-2 border-purple-500 dark:border-gray-100 text-purple-500 dark:text-gray-100 hover:bg-purple-500 dark:hover:bg-purple-500 hover:text-white dark:hover:text-gray-800 rounded-lg"
                onClick={() => setShowContact(true)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="hero pt-32 pb-20 px-5 bg-gradient-to-br from-gray-50 to-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="hero-title text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-br from-purple-500 to-green-500 bg-clip-text text-transparent">Smart Gifting Made Simple</h1>
              <p className="text-lg mb-8 text-gray-500 dark:text-gray-400">End the stress of duplicate gifts and unwanted presents. Zawify makes gifting meaningful and perfectly tailored to every occasion.</p>
              <div className="hero-buttons flex gap-5">
                <button className="btn-primary large px-8 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Create Wishlist</button>
                <button className="btn-secondary large px-8 py-4 border-2 border-purple-500 dark:border-gray-100 text-purple-500 dark:text-gray-100 hover:bg-purple-500 dark:hover:bg-purple-500 hover:text-white dark:hover:text-gray-800 rounded-lg" onClick={() => setShowContact(true)}>Contact Us</button>
              </div>
            </div>
            <div className="gift-demo flex justify-center">
              <div className="gift-card bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-2xl max-w-xs animate-float hover:animate-none hover:scale-105 transition-transform">
                <div className="gift-emoji text-5xl text-center mb-4">🎁</div>
                <h3 className="text-xl font-semibold text-center mb-5 text-gray-800 dark:text-gray-100">My Birthday Wishlist</h3>
                <div className="gift-list flex flex-col gap-3">
                  <div className="gift-item reserved flex justify-between p-3 bg-red-100/10 dark:bg-red-900/10 border border-red-500 rounded-lg text-sm">
                    <span>Wireless Headphones</span>
                    <span className="status bg-red-500 text-white px-2 py-1 rounded">Reserved</span>
                  </div>
                  <div className="gift-item available flex justify-between p-3 bg-green-100/10 dark:bg-green-900/10 border border-green-500 rounded-lg text-sm">
                    <span>Coffee Maker</span>
                    <span className="status bg-green-500 text-white px-2 py-1 rounded">Available</span>
                  </div>
                  <div className="gift-item suggested flex justify-between p-3 bg-purple-100/10 dark:bg-purple-900/10 border border-purple-500 rounded-lg text-sm">
                    <span>Art Supplies</span>
                    <span className="status bg-purple-500 text-white px-2 py-1 rounded">AI Suggested</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problems" className="problem py-20 px-5 bg-gray-50 dark:bg-slate-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">The Gift-Giving Problem</h2>
          <div className="container mx-auto max-w-4xl">
            <div className="carousel overflow-hidden">
              <div className="carousel-track flex gap-8 animate-scroll">
                {["Stress from not knowing what to buy 😰", "Duplicate gifts that go unused 📦", "Money wasted on unwanted items 💸", "Environmental waste 🗑️"].map((problem, i) => (
                  <div key={i} className="problem-card min-w-[250px] bg-white dark:bg-slate-700 p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium">{problem}</p>
                  </div>
                ))}
                {/* Duplicate cards for seamless carousel */}
                {["Stress from not knowing what to buy 😰", "Duplicate gifts that go unused 📦", "Money wasted on unwanted items 💸", "Environmental waste 🗑️"].map((problem, i) => (
                  <div key={`dup-${i}`} className="problem-card min-w-[250px] bg-white dark:bg-slate-700 p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features py-20 px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">Why Choose Zawify?</h2>
          <p className="section-subtitle text-lg text-center mb-12 text-gray-500 dark:text-gray-400">Transform the way you give and receive gifts</p>
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "📝", title: "Create Smart Wishlists", desc: "Build organized wishlists for any event - birthdays, holidays, graduations, or just because moments." },
              { emoji: "🔒", title: "Reserve Items", desc: "Friends and family can secretly reserve items, eliminating duplicates and ensuring perfect surprises." },
              { emoji: "🤖", title: "AI-Powered Suggestions", desc: "Get personalized gift recommendations based on personality, budget, interests, and occasion." },
              { emoji: "🌐", title: "Easy Sharing", desc: "Share your wishlists with a simple link. No account required for gift-givers to view and reserve." },
              { emoji: "💝", title: "All Occasions", desc: "Perfect for every celebration - birthdays, holidays, achievements, and more." },
              { emoji: "♻️", title: "Reduce Waste", desc: "Meaningful gifting means less waste, more value, and stronger connections between people." },
            ].map((feature, i) => (
              <div key={i} className="feature-card bg-white dark:bg-slate-700 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-600 hover:shadow-lg hover:-translate-y-2 hover:border-purple-500 transition-all">
                <div className="feature-emoji text-5xl mb-5">{feature.emoji}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works py-20 px-5 bg-gray-50 dark:bg-slate-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">How It Works</h2>
          <p className="section-subtitle text-lg text-center mb-12 text-gray-500 dark:text-gray-400">Three simple steps to stress-free gifting</p>
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: 1, title: "Create Your Wishlist", desc: "Add items you'd love to receive, set price ranges, and include helpful notes for gift-givers." },
              { step: 2, title: "Share With Loved Ones", desc: "Send a simple link to friends and family. They can view your list and reserve items secretly." },
              { step: 3, title: "Enjoy Perfect Gifts", desc: "Receive exactly what you wanted while gift-givers feel confident in their thoughtful choices." },
            ].map((item) => (
              <div key={item.step} className="step bg-white dark:bg-slate-700 p-5 rounded-lg text-center">
                <div className="step-number w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-5 mx-auto">Step {item.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-[280px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta py-20 px-5 bg-white dark:bg-slate-700 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800 dark:text-gray-100">Ready to Transform Your Gifting Experience?</h2>
          <p className="text-lg mb-10 text-gray-500 dark:text-gray-400 opacity-90">Join thousands who've already discovered the joy of stress-free, meaningful gift-giving.</p>
          <div className="cta-buttons flex justify-center gap-5">
            <button className="btn-primary large px-8 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Create Your First Wishlist</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer py-10 px-5 bg-gradient-to-br from-purple-500 to-green-500 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="footer-words">© 2025 Zawify. All rights reserved.</p>
          </div>
        </footer>

        {/* Get Started Modal */}
        {showGetStarted && (
          <div className="modal fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[2000]">
            <div className="modal-content bg-white dark:bg-slate-700 p-8 rounded-xl shadow-2xl max-w-md w-[90%] text-center">
              <button className="close-btn absolute top-3 right-4 text-2xl text-gray-800 dark:text-gray-100 hover:text-purple-500" onClick={() => setShowGetStarted(false)}>×</button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Welcome to Zawify!</h2>
              <p className="mb-6 text-gray-500 dark:text-gray-400">Start your wishlist and make gifting magical.</p>
              <button className="btn-primary w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Create Wishlist</button>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        {showContact && (
          <div className="modal fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[2000]">
            <div className="modal-content bg-white dark:bg-slate-700 p-8 rounded-xl shadow-2xl max-w-md w-[90%] text-center">
              <button className="close-btn absolute top-3 right-4 text-2xl text-gray-800 dark:text-gray-100 hover:text-purple-500" onClick={() => setShowContact(false)}>×</button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Get in Touch</h2>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-600 dark:text-gray-100"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-600 dark:text-gray-100"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="p-3 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-600 dark:text-gray-100 resize-y min-h-[100px]"
                  required
                />
                <button type="submit" className="btn-primary px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                  Send
                </button>
              </form>
              {formResponse && <p className="form-response mt-3 font-bold text-amber-500">{formResponse}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



