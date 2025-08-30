import React, { useState } from "react";
import { signup } from "../api";

const Signup = ({ setPage }) => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("Signup successful! Please login.");
      setPage("login");
    } catch (err) {
      console.log(err);
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
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        Signup
      </button>
    </form>
  );
};

export default Signup;
