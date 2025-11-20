// backend/server.js
import 'dotenv/config';
console.log("MONGO_URI check:", process.env.MONGO_URI ? "Loaded Atlas URI" : "ERROR: Not loaded");
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config.js";
import authRoutes from "./src/routes/auth.js";
import wishlistRoutes from "./src/routes/wishlist.js";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
await connectDB();   // ← MUST use await or .then()!

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wishlists", wishlistRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Zawify Backend Running!");
});

// Create server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.on("claim_item", (data) => {
    io.emit("item_claimed", data);
  });
  socket.on("disconnect", () => console.log("Client disconnected"));
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});