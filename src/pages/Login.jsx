import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("admin@example.com"); // default
  const [pass, setPass] = useState("admin123"); // default
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials check
    if (email === "admin@example.com" && pass === "admin123") {
      localStorage.setItem("auth", true);
      toast.success("Login successful! 🎉");
      navigate("/");
    } else {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
