import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
name: String,
price: Number,
link: String,
image: String,
claimed: { type: Boolean, default: false },
claimedBy: { type: String, default: "" },
});


const wishlistSchema = new mongoose.Schema({
owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
title: String,
description: String,
items: [itemSchema],
});


export default mongoose.model("Wishlist", wishlistSchema);


