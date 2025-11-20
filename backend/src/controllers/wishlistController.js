import Wishlist from "../models/Wishlist.js";
import User from "../models/User.js";

export const createWishlist = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const wishlist = await Wishlist.create({ name, creator: userId });
    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWishlists = async (req, res) => {
  try {
    const wishlists = await Wishlist.find({ creator: req.params.userId });
    res.json(wishlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addGiftItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, price, link, description } = req.body;

    const updated = await Wishlist.findByIdAndUpdate(
      id,
      { $push: { items: { name, image, price, link, description } } },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const claimGiftItem = async (req, res) => {
  try {
    const { wishlistId, itemId } = req.params;
    const { claimerName } = req.body;

    const wishlist = await Wishlist.findById(wishlistId);
    const item = wishlist.items.id(itemId);
    if (item.claimed) return res.status(400).json({ message: "Item already claimed" });

    item.claimed = true;
    item.claimedBy = claimerName;
    item.claimedAt = new Date();
    await wishlist.save();

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};