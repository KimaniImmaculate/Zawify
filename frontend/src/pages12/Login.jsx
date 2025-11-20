import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


const login = async () => {
await axios.post("http://localhost:5000/api/auth/login", { email, password });
navigate("/create");
};


return (
<div className="p-10 text-center">
<h1 className="text-3xl mb-4 font-bold">Login</h1>


<input
placeholder="Email"
className="border p-2 w-64 mb-3"
onChange={(e) => setEmail(e.target.value)}
/>
<br />


<input
placeholder="Password"
type="password"
className="border p-2 w-64 mb-3"
onChange={(e) => setPassword(e.target.value)}
/>
<br />


<button onClick={login} className="bg-black text-white px-6 py-2 rounded-xl">
Login
</button>


<p className="mt-3">
No account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
</p>
</div>
);
}