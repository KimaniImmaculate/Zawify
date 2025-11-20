import { Link } from "react-router-dom";


export default function Home() {
return (
<div className="min-h-screen bg-gradient-to-b from-rose-100 to-white text-center p-10">
<h1 className="text-5xl font-bold mb-4">Turn Presents Into Moments</h1>
<p className="text-lg mb-8">Create wishlists, share, and let friends claim gifts.</p>


<Link to="/login">
<button className="px-6 py-3 bg-black text-white rounded-xl">Get Started</button>
</Link>
</div>
);
}