import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { view } from '../../data/allapi';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    try {
      const response = await fetch(view.USER_FORGOT_PASSWORD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setError('');
        alert("Reset link sent / OTP sent ✅");
        navigate("/forgototpverification", { state: { email } });
      } else {
        setError(data.message || "Failed to send reset link");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Forgot Password</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded"
          >
            Send Reset Link
          </button>
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