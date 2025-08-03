import React from 'react';
import logo from '../assets/logo.jpg'; // Replace with your actual logo

const Nav = () => {
  return (
    <nav className="w-full px-6 lg:px-24 py-4 flex justify-between items-center shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Billu Salons App" className="h-12 w-auto" />
      </div>

      {/* Links */}
      <div className="hidden lg:flex space-x-8 text-base font-medium">
        <a href="#" className="hover:text-pink-600">Home</a>
        <a href="#" className="hover:text-pink-600">About</a>
        <a href="#" className="hover:text-pink-600">Services & Categories</a>
        <a href="#" className="hover:text-pink-600">Contact Us</a>
      </div>

      {/* Right Section: Search + Button */}
      <div className="flex items-center gap-4">

        {/* Glassmorphism Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 pl-10 rounded-md bg-white/10 backdrop-blur-md border border-white/30 text-sm text-gray-800 placeholder-gray-600 shadow-inner focus:outline-none"
          />
          <span className="absolute left-3 top-2.5 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </span>
        </div>

        {/* Sign Up Button */}
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
