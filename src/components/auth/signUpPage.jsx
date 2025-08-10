// src/components/SignUpPage.jsx

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { view } from '../../data/allapi';

const SignUpPage = ({ onSwitchToLogin }) => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType:"User",
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit =async  (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError('');
    try {
      let response=await fetch(view.USER_SIGNUP,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      let res=await response.json()
    
      if (response.ok) {

  navigate("/otpVerification",{
    state:{
      email:formData.email
    }
  });
}

    
      
      
    } catch (error) {
      console.log("Error in signup",error)
      
    }
   
    console.log("Creating account with:", formData);
   
 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Glamour & Grace</h1>
          <p className="text-gray-500">Create Your Account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="name"
              type="text"
              name="name"
              placeholder="e.g., Jane Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{' '}
          
          <NavLink to="/login">
            <button onClick={onSwitchToLogin} className="font-bold text-pink-500 hover:text-pink-700">
              Log In
            </button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;