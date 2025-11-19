import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  link: String,
  image: String,
  claimedBy: { type: String, default: null } // store name of claimer for public view
});

export default itemSchema; // exported as subdocument schema

