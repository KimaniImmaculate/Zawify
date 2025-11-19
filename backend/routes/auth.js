import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { jwtSecret } from '../config.js';

const router = express.Router();

// register (simple email + password)
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing email/password' });
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ name, email, passwordHash: hash });
  await user.save();
  const token = jwt.sign({ id: user._id }, jwtSecret);
  res.json({ token, user: { id: user._id, name: user.name, email: user.email }});
});

// login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'Invalid' });
  const token = jwt.sign({ id: user._id }, jwtSecret);
  res.json({ token, user: { id: user._id, name: user.name, email: user.email }});
});

export default router;

