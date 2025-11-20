import express from "express";
import Wishlist from "../models/Wishlist.js";
import authMiddleware from "../middleware/auth.js"; 

const router = express.Router();

// @route   POST api/wishlists/create
// @desc    Create a new wishlist
// @access  Private
router.post("/create", authMiddleware, async (req, res) => {
    try {
        const { title, gifts } = req.body;
        
        const newWishlist = new Wishlist({
            title,
            gifts: gifts,
            owner: req.user.id,
            ownerName: req.user.name, 
        });

        const wishlist = await newWishlist.save();
        
        res.status(201).json({ wishlistId: wishlist._id }); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error during creation');
    }
});

// @route   GET api/wishlists/:wishlistId
// @desc    Get a single wishlist by ID
// @access  Public
router.get("/:wishlistId", async (req, res) => {
    try {
        const wishlist = await Wishlist.findById(req.params.wishlistId).select('-owner -__v');
        
        if (!wishlist) {
            return res.status(404).json({ msg: 'Wishlist not found' });
        }
        
        res.json(wishlist);
    } catch (err) {
        if (err.kind === 'ObjectId') {
             return res.status(404).json({ msg: 'Wishlist not found' });
        }
        console.error(err.message);
        res.status(500).send('Server Error during retrieval');
    }
});

// @route   POST api/wishlists/claim
// @desc    Claim a specific gift on a list
// @access  Private (Requires claimant to be logged in)
router.post("/claim", authMiddleware, async (req, res) => {
    try {
        const { wishlistId, giftId } = req.body;
        
        const wishlist = await Wishlist.findById(wishlistId);

        if (!wishlist) {
            return res.status(404).json({ msg: 'Wishlist not found' });
        }

        const giftToClaim = wishlist.gifts.find(gift => gift._id.toString() === giftId);

        if (!giftToClaim) {
            return res.status(404).json({ msg: 'Gift item not found' });
        }

        if (giftToClaim.isClaimed) {
            return res.status(400).json({ msg: 'Gift is already claimed' });
        }

        // Apply claim changes
        giftToClaim.isClaimed = true;
        giftToClaim.claimedBy = req.user.id;
        giftToClaim.claimedByName = req.user.name; 

        await wishlist.save();
        
        // This response should be used by Socket.IO to emit a real-time update
        res.json({ 
            msg: 'Gift claimed successfully', 
            claimedBy: req.user.name,
            giftId: giftId,
            wishlistId: wishlistId
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error during claim attempt');
    }
});

export default router;




