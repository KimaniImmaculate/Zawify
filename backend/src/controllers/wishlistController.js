import Wishlist from "../models/Wishlist.js";

// Get all wishlists
export const getWishlists = async (req, res, next) => {
  try {
    const wishlists = await Wishlist.find().populate("host", "name email").populate("items");
    res.json(wishlists);
  } catch (error) {
    next(error);
  }
};

// Create a wishlist
export const createWishlist = async (req, res, next) => {
  try {
    const { title, description, host } = req.body;
    const wishlist = await Wishlist.create({ title, description, host });
    res.status(201).json(wishlist);
  } catch (error) {
    next(error);
  }
};
