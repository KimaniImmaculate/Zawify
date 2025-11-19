import express from "express";
import {
  getUserWishlists,
  createWishlist,
  editWishlist,
  getPublicWishlist
} from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/user/:userId", getUserWishlists);
router.post("/", createWishlist);
router.put("/:id", editWishlist);
router.get("/public/:id", getPublicWishlist);

export default router;

