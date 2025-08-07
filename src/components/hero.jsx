import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Clock } from 'lucide-react';
import { BASE_URL, view } from '../data/allapi';

const Hero = () => {
  const [count, setCount] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null); // For background video
  const targetValue = 560575;

  // Count animation
  useEffect(() => {
    const duration = 2000;
    const increment = targetValue / (duration / 16);
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

  // Fetch banner data and extract video
  useEffect(() => {
    const fetchVideoBanner = async () => {
      try {
        const res = await fetch(`${BASE_URL}${view.GET_ALL_BANNER}`); // 🔁 Replace with your actual API endpoint
        const data = await res.json();

        if (data.success && data.data?.length > 0) {
          const videoBanner = data.data.find(item =>
            item.background?.url?.match(/\.(mp4|webm|ogg)$/i)
          );

          if (videoBanner) {
            setVideoUrl(videoBanner.background.url);
          }
        }
      } catch (err) {
        console.error('Error fetching banner:', err);
      }
    };

    fetchVideoBanner();
  }, []);

  // Format number with commas
  const formatNumber = (num) => num.toLocaleString('en-IN');

  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      
      {/* 🔁 Background Video (if exists) */}
      {videoUrl && (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      {/* 🔳 Overlay to make text readable */}
      <div className="absolute top-0 left-0 w-full h-full  -10" />

      {/* 🌟 Main Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 min-h-screen">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8 ">
          Book local beauty and <br /> wellness services
        </h1>

        {/* Search Bar */}
        <div className="bg-white shadow-md rounded-full flex flex-wrap md:flex-nowrap items-center px-4 py-3 gap-4 w-full max-w-4xl border-2 border-pink-300">
          <div className="flex items-center gap-2 flex-1">
            <Search className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="All treatments and venues"
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Current location"
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Calendar className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Any date"
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Clock className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Any time"
              className="w-full outline-none text-sm"
            />
          </div>
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-900 transition-all">
            Search
          </button>
        </div>

        {/* Appointments Counter */}
        <p className="mt-10 text-gray-700 text-lg font-medium">
          <span className="font-bold text-pink-500">{formatNumber(count)}</span> appointments booked today
        </p>
      </div>
    </section>
  );
};

export default Hero;