import Wishlist from "../models/Wishlist.js";

// Get all wishlists of logged-in user
export const getUserWishlists = async (req, res) => {
  try {
    const wishlists = await Wishlist.find({ owner: req.user._id });
    res.json({ success: true, wishlists });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Create wishlist
export const createWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create({
      owner: req.user._id,       // <-- THIS IS THE FIX
      title: req.body.title,
      description: req.body.description,
      items: req.body.items || [],
      isPublic: req.body.isPublic || false
    });

    res.json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


// Edit wishlist
export const editWishlist = async (req, res) => {
  try {
    const updated = await Wishlist.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.json({ success: true, wishlist: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get public wishlist
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


