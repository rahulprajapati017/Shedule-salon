import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo or Brand */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          MyCompany
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/services" className="hover:text-gray-400 transition">Services</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
