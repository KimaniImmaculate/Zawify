import Wishlist from "../models/Wishlist.js";

export const getUserWishlists = async (req, res) => {
  try {
    const wishlists = await Wishlist.find({ owner: req.params.userId });
    res.json({ success: true, wishlists });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const createWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create(req.body);
    res.json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const editWishlist = async (req, res) => {
  try {
    const updated = await Wishlist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, wishlist: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getPublicWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);

    if (!wishlist || !wishlist.isPublic) {
      return res.status(404).json({ success: false, message: "Not public" });
    }

    res.json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

