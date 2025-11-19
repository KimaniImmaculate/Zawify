import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    items: [
      {
        name: String,
        link: String,
        price: Number,
      },
    ],
    isPublic: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Wishlist", wishlistSchema);

