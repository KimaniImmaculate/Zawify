import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import config from './config.js';
import authRoutes from './routes/auth.js';
import wishlistRoutes from './routes/wishlist.js';

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' }});

// attach io to app so routes can emit
app.set('io', io);

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
  // clients join a room named after wishlist slug
  socket.on('join', (slug) => {
    socket.join(slug);
  });
  socket.on('leave', (slug) => socket.leave(slug));
});

app.use('/api/auth', authRoutes);
app.use('/api/wishlists', wishlistRoutes);

// static serve in production (optional)
// app.use(express.static('public'));

mongoose.connect(config.mongoURI, { })
  .then(() => {
    console.log('Mongo connected');
    server.listen(config.port, () => console.log('Server running on', config.port));
  })
  .catch(err => console.error(err));



