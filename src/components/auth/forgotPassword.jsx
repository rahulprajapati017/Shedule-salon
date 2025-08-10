import React, { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Forgot Password</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Link styled as a button */}
          <NavLink
            to="/otpVerification"
            className="block text-center w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded"
          >
            Send Reset Link
          </NavLink>
        </form>

        <p className="mt-4 text-sm text-center">
          Remembered your password?{' '}
          <Link to="/login" className="text-pink-600 underline hover:text-pink-800">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
