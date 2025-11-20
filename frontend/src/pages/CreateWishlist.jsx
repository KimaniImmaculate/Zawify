import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateWishlist = () => {
    const [title, setTitle] = useState('');
    const [gifts, setGifts] = useState([{ name: '', url: '' }]);
    const [loading, setLoading] = useState(false);
    const [shareLink, setShareLink] = useState(null);
    const navigate = useNavigate();

    const getToken = () => localStorage.getItem('token');

    const handleGiftChange = (index, e) => {
        const { name, value } = e.target;
        const newGifts = [...gifts];
        newGifts[index][name] = value;
        setGifts(newGifts);
    };

    const addGiftField = () => {
        setGifts([...gifts, { name: '', url: '' }]);
    };

    const removeGiftField = (index) => {
        const newGifts = gifts.filter((_, i) => i !== index);
        setGifts(newGifts);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setShareLink(null);

        const validGifts = gifts.filter(g => g.name.trim() !== '');

        if (!title || validGifts.length === 0) {
            alert('Please provide a title and at least one gift.');
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post(
                '/api/wishlists/create',
                { title, gifts: validGifts },
                {
                    headers: { 'x-auth-token': getToken() },
                }
            );

            const wishlistId = res.data.wishlistId; 
            const link = `${window.location.origin}/wishlist/${wishlistId}`;
            setShareLink(link);

        } catch (error) {
            alert('Failed to create wishlist. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center py-10 bg-gray-50 min-h-screen">
            <div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
                    Create Your Dream Wishlist
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                            Wishlist Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="e.g., Birthday Presents, Housewarming"
                        />
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                        Gifts ({gifts.length})
                    </h3>
                    
                    {gifts.map((gift, index) => (
                        <div key={index} className="flex space-x-3 mb-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                            <div className="flex-1">
                                <label className="block text-gray-700 text-sm font-medium mb-1">
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={gift.name}
                                    onChange={(e) => handleGiftChange(index, e)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    placeholder="e.g., Wireless Headphones"
                                    required
                                />
                            </div>

                            <div className="flex-1">
                                <label className="block text-gray-700 text-sm font-medium mb-1">
                                    Link (Optional)
                                </label>
                                <input
                                    type="url"
                                    name="url"
                                    value={gift.url}
                                    onChange={(e) => handleGiftChange(index, e)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    placeholder="https://store.com/item"
                                />
                            </div>

                            {gifts.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeGiftField(index)}
                                    className="text-red-500 hover:text-red-700 self-end p-2 transition duration-150"
                                    aria-label="Remove gift"
                                >
                                    ❌
                                </button>
                            )}
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addGiftField}
                        className="w-full text-indigo-600 border border-indigo-300 py-2 rounded-lg hover:bg-indigo-50 transition duration-300 font-medium mb-6"
                    >
                        + Add Another Gift
                    </button>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Generating Link...' : 'Create Wishlist & Get Share Link'}
                    </button>
                </form>

                {shareLink && (
                    <div className="mt-8 p-6 bg-green-50 border border-green-300 rounded-lg text-center">
                        <p className="text-xl font-bold text-green-700 mb-3">
                            ✅ Success! Share this link:
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={shareLink}
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm text-indigo-600 overflow-x-scroll"
                        />
                        <button
                            onClick={() => navigator.clipboard.writeText(shareLink)}
                            className="mt-3 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm font-medium"
                        >
                            Copy Link
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateWishlist;