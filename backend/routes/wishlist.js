import express from 'express';
import Wishlist from '../models/Wishlist.js';
import crypto from 'crypto';

const router = express.Router();

// create wishlist
router.post('/', async (req, res) => {
  const { title, description, items } = req.body;
  const slug = crypto.randomBytes(5).toString('hex');
  const wishlist = new Wishlist({ title, description, items, slug, isPublic: true });
  await wishlist.save();
  res.json(wishlist);
});

// get public wishlist by slug
router.get('/public/:slug', async (req, res) => {
  const { slug } = req.params;
  const wishlist = await Wishlist.findOne({ slug });
  if (!wishlist) return res.status(404).json({ error: 'Not found' });
  res.json(wishlist);
});

// claim an item (public)
router.post('/:slug/items/:itemId/claim', async (req, res) => {
  const { name } = req.body; // claimer name
  const { slug, itemId } = req.params;
  const wishlist = await Wishlist.findOne({ slug });
  if (!wishlist) return res.status(404).json({ error: 'Not found' });
  const item = wishlist.items.id(itemId);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  if (item.claimedBy) return res.status(400).json({ error: 'Already claimed' });
  item.claimedBy = name;
  await wishlist.save();

  // Notify via socket.io using global io on req.app
  const io = req.app.get('io');
  if (io) io.to(slug).emit('item-claimed', { slug, itemId, claimedBy: name });

  res.json({ ok: true, item });
});

export default router;




