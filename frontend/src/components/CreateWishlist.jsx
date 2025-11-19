import React, { useState } from 'react';
import API from '../api';

export default function CreateWishlist(){
  const [title, setTitle] = useState('');
  const [itemsText, setItemsText] = useState('');
  const [created, setCreated] = useState(null);

  async function handleCreate(e){
    e.preventDefault();
    const items = itemsText.split('\n').map(line => {
      const [name, price, link] = line.split('|').map(s => s && s.trim());
      return { name: name || '', price: price ? Number(price) : 0, link: link || '', image: '' };
    });
    const res = await API.post('/wishlists', { title, description: '', items });
    setCreated(res.data);
  }

  return (
    <section id="create" className="my-12">
      <div className="max-w-3xl bg-white rounded-xl shadow p-6">
        <h3 className="text-2xl font-semibold mb-2">Create a demo wishlist</h3>
        <p className="text-sm text-gray-500 mb-4">Enter lines like: <code>Phone | 1000000 | https://example.com</code></p>
        <form onSubmit={handleCreate}>
          <input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="Wishlist title" className="w-full mb-3 p-2 border rounded" />
          <textarea value={itemsText} onChange={e=>setItemsText(e.target.value)} rows="4" className="w-full p-2 border rounded" placeholder="Item | price | link (one per line)"></textarea>
          <div className="mt-3 flex gap-3">
            <button className="bg-purple-600 text-white px-4 py-2 rounded">Create</button>
            {created && <a className="px-4 py-2 border rounded" target="_blank" href={`/${created.slug}`}>Open</a>}
          </div>
        </form>

        {created && (
          <div className="mt-4 bg-gray-50 p-3 rounded">
            <p>Created: <strong>{created.title}</strong></p>
            <p>Public link: <code>{window.location.origin}/{created.slug}</code></p>
          </div>
        )}
      </div>
    </section>
  );
}
