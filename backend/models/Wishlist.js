import mongoose from 'mongoose';
import ItemSchema from './Item.js';

const wishlistSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  title: { type: String, required: true },
  description: String,
  isPublic: { type: Boolean, default: true },
  items: [ItemSchema],
  slug: { type: String, unique: true, index: true } // shareable id
}, { timestamps: true });

export default mongoose.model('Wishlist', wishlistSchema);


