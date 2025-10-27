"use client";
import React, { useState } from "react";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      alert("Logged in with GitHub!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back!
        </h1>

        {/* Social login buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition"
          >
            GitHub
          </button>
        </div>

        <div className="text-center text-gray-400 mb-4">OR</div>

        {/* Email/password form */}
        <form onSubmit={handleCreateAccount} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
