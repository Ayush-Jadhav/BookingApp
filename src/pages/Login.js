import React, { useState } from "react";
import { login } from "../api";

const Login = ({ setUser, setPage }) => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      setUser(data.username);
      setPage("home");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 max-w-sm mx-auto flex flex-col"
    >
      <input
        className="border p-2 rounded"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="border p-2 rounded"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
