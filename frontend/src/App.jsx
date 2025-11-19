import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import AiSuggestions from "./pages/AiSuggestions.jsx";

import CreateWishlist from "./pages/CreateWishlist.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EditWishlist from "./pages/EditWishlist.jsx";
import PublicWishlist from "./pages/PublicWishlist.jsx";

import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist/public/:id" element={<PublicWishlist />} />

        {/* Authenticated User Routes (Protected later) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist/create" element={<CreateWishlist />} />
        <Route path="/wishlist/:id" element={<Wishlist />} />
        <Route path="/wishlist/:id/edit" element={<EditWishlist />} />

        {/* AI Suggestions */}
        <Route path="/ai" element={<AiSuggestions />} />
      </Routes>
    </>
  );
}

export default App;


