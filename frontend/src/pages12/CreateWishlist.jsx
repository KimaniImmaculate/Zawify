import { useState } from "react";
const navigate = useNavigate();
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [items, setItems] = useState([]);


const addItem = () => {
setItems([...items, { name: "", price: "", link: "" }]);
};


const create = async () => {
const res = await axios.post("http://localhost:5000/api/wishlist/create", {
owner: "dummy-user-id",
title,
description,
items,
});


navigate(`/wishlist/${res.data._id}`);
};


return (
<div className="p-10">
<h1 className="text-3xl font-bold mb-4">Create Wishlist</h1>


<input className="border p-2 mb-3 block w-80" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />


<textarea className="border p-2 mb-3 w-80" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />


{items.map((item, index) => (
<div key={index} className="mb-3 border p-3 w-80 rounded-xl">
<input
placeholder="Item name"
className="border p-2 mb-2 w-full"
onChange={(e) => (items[index].name = e.target.value)}
/>
<input
placeholder="Price"
className="border p-2 mb-2 w-full"
onChange={(e) => (items[index].price = e.target.value)}
/>
<input
placeholder="Link"
className="border p-2 w-full"
onChange={(e) => (items[index].link = e.target.value)}
/>
</div>
))}


<button onClick={addItem} className="px-4 py-2 bg-gray-200 rounded-xl mr-4">Add Item</button>


<button onClick={create} className="px-6 py-2 bg-black text-white rounded-xl">Save Wishlist</button>
</div>
);