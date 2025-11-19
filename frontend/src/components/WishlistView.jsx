import React, { useEffect, useState } from 'react';
import API from '../api';
import { io } from 'socket.io-client';
import WishlistCard from './WishlistCard';

const SOCKET_URL = import.meta.env.VITE_API_WS || 'http://localhost:4000';

export default function WishlistView(){
  const [wishlist, setWishlist] = useState(null);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (!slug) return;
    const socket = io(SOCKET_URL);
    socket.emit('join', slug);
    socket.on('item-claimed', data => {
      if (data.slug === slug) {
        setWishlist(prev => {
          if (!prev) return prev;
          const items = prev.items.map(it => it._id === data.itemId ? {...it, claimedBy: data.claimedBy } : it);
          return { ...prev, items };
        });
      }
    });
    return () => socket.disconnect();
  }, [slug]);

  async function load() {
    if (!slug) return;
    const res = await API.get(`/wishlists/public/${slug}`);
    setWishlist(res.data);
  }

  return (
    <section className="my-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-2 mb-4">
          <input value={slug} onChange={e=>setSlug(e.target.value)} placeholder="Enter wishlist slug (e.g. public id)" className="p-2 border rounded flex-1" />
          <button onClick={load} className="px-4 py-2 bg-pink-500 text-white rounded">Load</button>
        </div>

        {wishlist ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{wishlist.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {wishlist.items.map(item => (
                <WishlistCard key={item._id} item={item} wishlistSlug={wishlist.slug} onClaimed={(claimer) => {
                  setWishlist(prev => {
                    const items = prev.items.map(i => i._id === item._id ? {...i, claimedBy: claimer} : i);
                    return {...prev, items};
                  });
                }} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Load a public wishlist to preview the claim UX.</div>
        )}
      </div>
    </section>
  );
}



