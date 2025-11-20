# Zawify — Real‑Time Wishlist App

Zawify is a MERN (MongoDB, Express, React, Node) application with Socket.IO for real‑time gift claiming. Users create shareable wishlists and friends/family can claim gifts in real time without duplicate claims.

---

## Live demo
- Frontend: <Insert Frontend URL>
- Backend API: <Insert Backend API Base URL>

---

## Tech stack
- Frontend: React (Vite), Tailwind CSS (optional)
- Backend: Node.js, Express, Socket.IO
- Database: MongoDB Atlas
- Auth: JWT

---

## Key features
- JWT authentication (register / login)
- Create, edit and publish wishlists
- Public shareable wishlist links
- Real‑time gift claiming via Socket.IO (prevents duplicate claims)
- Minimal REST API for CRUD and claiming

---

# Project structure (Zawify)

Zawify/
├── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable UI components (Navbar, ItemCard, etc.)
│   │   ├── pages/             # Views (LandingPage, AuthForm, CreateWishlist, WishlistDetail, Signup, Login)
│   │   ├── services/          # API helpers (api.js, authService.js, wishlistService.js, aiService.js)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── .env
└── backend/
    ├── .env                   # MONGO_URI, JWT_SECRET, FRONTEND_ORIGIN, PORT
    ├── server.js              # Express + Socket.IO entry
    ├── config.js              # DB connection helper
    ├── package.json
    └── src/
        ├── models/            # Mongoose schemas (User.js, Wishlist.js, Item.js)
        ├── controllers/       # Route logic (authController, wishlistController, itemController, aiController)
        ├── routes/            # Express routes (auth.js, wishlist.js, item.js, ai.js)
        ├── middleware/        # auth.js (JWT), error handling
        └── utils/             # helpers (token generation, socket helpers)

---

## Local development

Prerequisites
- Node.js v18+
- MongoDB Atlas URI
- Git

1. Clone
```bash
git clone <repo-url>
cd Zawify
```

2. Backend
```bash
cd backend
npm install
# create .env (example below)
npm run server   # or `npm run dev` if script available
```

3. Frontend
```bash
cd ../frontend
npm install
# optional: create frontend/.env -> VITE_API_URL=http://localhost:5000
npm run dev
# open http://localhost:5173
```

### Backend `.env` example
```
MONGO_URI="mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/zawify?retryWrites=true&w=majority"
JWT_SECRET="a_strong_jwt_secret"
PORT=5000
FRONTEND_ORIGIN="http://localhost:5173"
```

---

## Important API endpoints (examples)
- `POST /api/auth/register` — register user
- `POST /api/auth/login` — login, returns JWT
- `POST /api/wishlists` — create wishlist (auth)
- `GET /api/wishlists/:id` — get wishlist
- `GET /api/wishlists/public/:id` — public access
- `POST /api/wishlists/:id/claim` — claim an item (auth), emits Socket.IO update

---

## Socket.IO overview
- Server provides rooms per wishlist (e.g. `wishlist:<id>`).
- Client joins room and listens for events (e.g. `gift:claimed`).
- When an item is claimed, server updates DB and emits `gift:claimed` to that room so all clients update instantly.

Client example:
```js
const socket = io(BACKEND_URL);
socket.emit('join', `wishlist:${id}`);
socket.on('gift:claimed', payload => { /* update UI */ });
```

Server emits:
```js
io.to(`wishlist:${id}`).emit('gift:claimed', { wishlistId: id, itemId, claimedBy });
```

---

## Deployment notes
- Frontend: Vercel / Netlify — build the Vite app and point to the backend URL.
- Backend: Render / Heroku / Railway — set `MONGO_URI`, `JWT_SECRET`, and allowed CORS origins.
- Ensure Socket.IO support and use HTTPS in production.


