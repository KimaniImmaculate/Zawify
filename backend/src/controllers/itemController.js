import Item from "../models/Item.js";

// Get all items
export const getItems = async (req, res, next) => {
  try {
    const items = await Item.find().populate("wishlist").populate("claimedBy", "name email");
    res.json(items);
  } catch (error) {
    next(error);
  }
};

// Create an item
export const createItem = async (req, res, next) => {
  try {
    const { name, description, price, wishlist } = req.body;
    const item = await Item.create({ name, description, price, wishlist });
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};
