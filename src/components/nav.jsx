import React, { useState, useEffect } from 'react';
import { NavLink as Navlink } from 'react-router-dom';
import logo from '../assets/salon.jpg';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-24 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <img src={logo} alt="Billu Salons App" className="h-12 w-auto" /> */}
        <h1 className="text-5sm tracking-wide font-extrabold text-pink-600">
          SHEDULE <span className="text-gray-800">SALON</span>
        </h1>
      </div>

      {/* Links */}
      <div className="hidden lg:flex space-x-8 text-base font-medium text-gray-800">
        <a href="#" className="hover:text-pink-600">Home</a>
        <a href="#" className="hover:text-pink-600">About</a>
        <a href="#" className="hover:text-pink-600">Services & Categories</a>
        <a href="#" className="hover:text-pink-600">Contact Us</a>
      </div>

      {/* Right Section: List Business + Sign Up */}
      <div className="flex items-center gap-4">
        {/* List Your Business Button */}
        <button className="border border-gray-300 hover:border-pink-600 hover:text-pink-600 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition">
          List your business
        </button>

        {/* Sign Up Button */}
        <Navlink
          to="/login"
         >

        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
          Log in
        </button>
        </Navlink>
      </div>
    </nav>
  );
};

export default Nav;
