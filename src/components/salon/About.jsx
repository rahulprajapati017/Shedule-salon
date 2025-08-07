// src/components/About.jsx
import React, { useState } from 'react';
import photo1 from "../../assets/pictureGallery/photo1.jpg";
import photo2 from '../../assets/pictureGallery/photo2.jpg';
import photo3 from '../../assets/pictureGallery/photo3.jpg';

const About = () => {
  const [rating, setRating] = useState(4); // Example default rating

  return (
    <div className="bg-gray-100 py-10 px-4">
      {/* About Info */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Elegance Salon & Barber</h1>
        <p className="text-gray-600 text-lg">
          At Elegance Salon, we offer a blend of modern and traditional grooming services.
          Our expert stylists ensure you get the best look with premium products and personalized care.
        </p>

        {/* Rating & Timing */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 mt-4">
          {/* Star Rating */}
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
          </div>

          {/* Timing */}
          <div className="text-gray-700 font-medium">🕘 9:00 AM - 5:00 PM</div>
        </div>

        {/* Location */}
        <div className="mt-2">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            📍 View Location on Map
          </a>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
        <img src={photo1} alt="Salon" className="rounded-lg shadow-md" />
        <img src={photo2} alt="Salon" className="rounded-lg shadow-md" />
        <img src={photo3} alt="Salon" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default About;
