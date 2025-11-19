import React, { useState } from 'react';
import API from '../api';

export default function WishlistCard({ item, wishlistSlug, onClaimed }){
  const [loading, setLoading] = useState(false);

  async function claim(){
    const name = prompt('Your name to claim this gift');
    if (!name) return;
    try {
      setLoading(true);
      await API.post(`/wishlists/${wishlistSlug}/items/${item._id}/claim`, { name });
      onClaimed?.(name);
    } catch (err) {
      alert(err?.response?.data?.error || 'Could not claim');
    } finally { setLoading(false); }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="h-48 bg-gray-200 rounded-md mb-3 flex items-center justify-center">
        {item.image ? <img alt={item.name} src={item.image} className="object-cover h-full w-full rounded"/> : <div className="text-gray-500">Image</div>}
      </div>
      <h4 className="font-semibold">{item.name}</h4>
      <p className="text-gray-500">{item.price?.toLocaleString()}</p>
      <div className="mt-3 flex items-center justify-between">
        {item.claimedBy ? (
          <div className="px-3 py-1 bg-gray-100 rounded text-sm">Claimed</div>
        ) : (
          <button disabled={loading} className="px-3 py-1 bg-purple-600 text-white rounded" onClick={claim}>
            {loading ? 'Claiming...' : 'Claim'}
          </button>
        )}
        {item.claimedBy && <small className="text-gray-400">Claimed by {item.claimedBy}</small>}
      </div>
    </div>
  );
}
