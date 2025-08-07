// src/components/LoginPage.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = ({ onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would make an API call here to authenticate the user
    console.log("Logging in with:", { email, password });
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Glamour & Grace</h1>
          <p className="text-gray-500">Welcome Back! Please log in.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="text-xs text-pink-500 hover:text-pink-700 float-right mt-2">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{' '}
          <NavLink
          to="/signup">

          <button onClick={onSwitchToSignUp} className="font-bold text-pink-500 hover:text-pink-700">
            Sign Up
          </button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
