import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(data);
      alert("Account created! You can now login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>

      <form style={styles.form} onSubmit={submit}>
        <input
          type="text"
          placeholder="Name"
          style={styles.input}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button style={styles.btn}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: { width: "320px", margin: "30px auto" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", border: "1px solid #ccc" },
  btn: { padding: "10px", background: "black", color: "white" },
};

export default Register;

