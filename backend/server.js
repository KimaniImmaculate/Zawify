import app from "./app.js";
import connectDB from "./src/config/db.js";
import wishlistRoutes from "./src/routes/wishlistRoutes.js";  // <-- FIXED PATH

app.use("/api/wishlists", wishlistRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

