import React, { useState } from 'react';
import { FaSearch, FaTags, FaClock, FaPercent } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';

const ServicesCategories = () => {
  const [isFemale, setIsFemale] = useState(true);

  return (
    <div className="bg-[#f9fafe] py-10 px-4 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Services & Categories</h2>

      {/* Gender Toggle */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <span className={`${isFemale ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}>
          Female Category
        </span>
        <button
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
            isFemale ? 'bg-pink-500' : 'bg-gray-300'
          }`}
          onClick={() => setIsFemale(!isFemale)}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              isFemale ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`${!isFemale ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}>
          Male Category
        </span>
      </div>

      {/* Search Filters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
        <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full md:w-[250px]">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Where"
            className="outline-none flex-grow bg-transparent text-gray-700"
          />
        </div>
        <div className="relative w-full md:w-[250px]">
          <select className="appearance-none w-full bg-white text-gray-700 border border-gray-300 rounded-full shadow-md py-2 px-4 pr-8">
            <option>Select Category</option>
            <option>Hair</option>
            <option>Spa</option>
            <option>Facial</option>
          </select>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 20 20">
              <path d="M5.516 7.548l4.484 4.482 4.484-4.482L16 9.048l-6 6-6-6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Deal Highlights */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* Box 1 */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow">
          <FaTags className="text-pink-600" />
          <span className="text-sm text-gray-800 font-medium">Deals to grab</span>
        </div>
        {/* Box 2 */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow">
          <MdLocalOffer className="text-pink-600" />
          <span className="text-sm text-gray-800 font-medium">₹300 Offer<br />Choose any, from many</span>
        </div>
        {/* Box 3 */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow">
          <FaClock className="text-pink-600" />
          <span className="text-sm text-gray-800 font-medium">Best hours<br />of the day</span>
        </div>
        {/* Box 4 */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow">
          <FaPercent className="text-pink-600" />
          <span className="text-sm text-gray-800 font-medium">Save Big</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategories;
