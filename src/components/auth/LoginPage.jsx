// src/components/LoginPage.jsx

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { view } from '../../data/allapi';
import { useDispatch } from 'react-redux';
import { setToken } from '../Store/reducers/Authreducer';

const LoginPage = ({ onSwitchToSignUp }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(view.USER_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Login failed');
      }

      const { data } = await response.json();
      console.log(data.token);
      dispatch(setToken(data.token));
      alert('Login successful!');
      setLoading(false);
      navigate('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
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
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <NavLink
              to="/forgotPassword"
              className="text-xs text-pink-500 hover:text-pink-700 float-right mt-2 block"
            >
              Forgot Password?
            </NavLink>
          </div>

          {error && <p className="text-red-500 text-xs mb-4">Invalid credentials</p>}

          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{' '}
          <NavLink to="/signup">
            <button
              onClick={onSwitchToSignUp}
              className="font-bold text-pink-500 hover:text-pink-700"
            >
              Sign Up
            </button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
