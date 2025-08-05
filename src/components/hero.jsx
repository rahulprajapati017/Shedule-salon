import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  const [count, setCount] = useState(0);
  const targetValue = 560575; // The actual value without commas

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = targetValue / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  // Function to format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString('en-IN'); // Indian number formatting
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-pink-100 via-white to-purple-100">
      
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
        Book local beauty and <br /> wellness services
      </h1>

      {/* Search Bar */}
      <div className="bg-white shadow-md rounded-full flex flex-wrap md:flex-nowrap items-center px-4 py-3 gap-4 w-full max-w-4xl border-2 border-pink-300">
        
        {/* Treatment input */}
        <div className="flex items-center gap-2 flex-1">
          <Search className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="All treatments and venues"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Current location"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 flex-1">
          <Calendar className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Any date"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 flex-1">
          <Clock className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Any time"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Search Button */}
        <button className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-900 transition-all">
          Search
        </button>
      </div>

      {/* Appointments Counter */}
      <p className="mt-10 text-gray-700 text-lg font-medium">
        <span className="font-bold text-pink-500">{formatNumber(count)}</span> appointments booked today
      </p>
    </section>
  );
};

export default Hero;