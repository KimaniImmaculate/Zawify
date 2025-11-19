// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

// Routes
import authRoutes from "./src/routes/authRoutes.js";
import wishlistRoutes from "./src/routes/wishlistRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wishlists", wishlistRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Zawify API is running 🚀");
});

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


