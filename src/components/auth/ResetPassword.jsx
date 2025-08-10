import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { view } from '../../data/allapi'; // Make sure this has your RESET_PASSWORD endpoint

const ResetPassword = () => {
  const location=useLocation()
  const {email}=location.state || {}
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(view.USER_RESET_PASSWORD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password, confirmPassword })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password reset successfully ✅");
        navigate("/login");
      } else {
        alert(data.message || "Failed to reset password");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Reset Your Password</h2>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">New Password</label>
            <input
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter new password"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type={show ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id="showPassword"
              onChange={() => setShow(!show)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;