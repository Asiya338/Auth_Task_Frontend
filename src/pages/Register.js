import React, { useState } from "react";
import api from "../services/api";

function Register({ goToLogin }) {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      await api.post("/auth/register", form);
      setMessage("Registration successful. Please login.");
      setTimeout(goToLogin, 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br />
      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br />

      <button onClick={register}>Register</button>

      <p>{message}</p>

      <button onClick={goToLogin}>Back to Login</button>
    </div>
  );
}

const register = async () => {
  console.log("Register button clicked");
};

export default Register;
