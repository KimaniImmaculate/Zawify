import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setResponseMsg("Please fill out all fields.");
      return;
    }

    // Simulate success
    setResponseMsg("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
        required
      />
      <button type="submit" className="btn-primary w-full">Send</button>
      {responseMsg && <p className="text-center mt-2 text-green-500">{responseMsg}</p>}
    </form>
  );
};

export default ContactForm;
