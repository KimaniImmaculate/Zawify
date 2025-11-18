import express from "express";
import { getWishlists, createWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/", getWishlists);
router.post("/", createWishlist);

export default router;
