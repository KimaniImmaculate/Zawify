import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getUserWishlists,
  createWishlist,
  editWishlist,
  getPublicWishlist
} from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/user/:userId", protect, getUserWishlists);
router.post("/", protect, createWishlist);
router.put("/:id", protect, editWishlist);
router.get("/public/:id", getPublicWishlist);

export default router;



