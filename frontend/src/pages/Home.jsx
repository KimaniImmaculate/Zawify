// frontend/src/pages/Home.jsx
import WishlistCard from "../components/WishlistCard.jsx";

export default function Home() {
  const featured = [
    { title: "Birthday Wishlist", description: "Cute gifts I want 🎁" },
    { title: "Christmas Wishlist", description: "Festive fun 🎄" },
  ];

  return (
    <div className="page-container">
      <h1 className="home-title">Welcome to Zawify ✨</h1>
      <div className="featured-wishlists">
        {featured.map((w, i) => (
          <WishlistCard key={i} wishlist={w} />
        ))}
      </div>
    </div>
  );
}

