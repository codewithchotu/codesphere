"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/";
    } catch (err) {
      console.log(err);

      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-5">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-white">
            CodeSphere
          </h1>

          <p className="text-gray-300 mt-3">
            Connect. Share. Build Together.
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-white text-black font-bold py-4 rounded-xl mt-6 hover:scale-105 transition duration-300"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-white font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}