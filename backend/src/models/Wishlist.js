import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
