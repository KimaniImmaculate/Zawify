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
const PORT = process.env.PORT || 5000;

// Create server and socket instance *outside* the async function
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// --- Server Setup Function ---
const startServer = async () => {
    try {
        // --- Middleware ---
        const allowedOrigins = [
            process.env.CLIENT_URL, // for deployed frontend
        ];

        app.use(cors({
            origin: (origin, callback) => {
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            credentials: true
        }));
        app.use(express.json());

        // 🚨 FIX: Await is now safely inside the async function
        await connectDB(); 

        // --- Routes ---
        app.use("/api/auth", authRoutes);
        app.use("/api/wishlists", wishlistRoutes);

        // Test route
        app.get("/", (req, res) => {
            res.send("Zawify Backend Running!");
        });
        
        // --- Socket.IO Handlers ---
        io.on("connection", (socket) => {
            console.log("Client connected:", socket.id);
            socket.on("claim_item", (data) => {
                io.emit("item_claimed", data);
            });
            socket.on("disconnect", () => console.log("Client disconnected"));
        });

        // --- Start Listener ---
        server.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`);
        });

    } catch (err) {
        console.error("❌ Failed to start server/connect DB:", err);
        process.exit(1);
    }
};

// Execute the async function to start the application
startServer();