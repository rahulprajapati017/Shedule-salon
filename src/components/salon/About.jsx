// src/components/About.jsx
import React, { useState } from 'react';
import mainImage from "../../assets/pictureGallery/photo1.jpg";
import sideImage1 from '../../assets/pictureGallery/photo2.jpg';
import sideImage2 from '../../assets/pictureGallery/photo3.jpg';

const About = () => {
  const [rating, setRating] = useState(4); // Example default rating

  return (
    <section className="px-4 py-10 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">The Next Level Salon</h2>
      <p className="text-sm flex items-center gap-2 text-gray-700 mb-2">
        <span className="text-yellow-500">★★★★★</span> 
        <span className="text-sm text-gray-600">(3)</span> 
        • <span className="text-green-600 font-medium">Open until 7:00pm</span> 
        • Sanepa, Lalitpur 
        <a href="#" className="text-blue-500 underline ml-2">Get directions</a>
      </p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <img src={mainImage} alt="Salon Main" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex flex-col gap-4">
          <img src={sideImage1} alt="Salon Side 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src={sideImage2} alt="Salon Side 2" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Optional Button */}
      <div className="mt-4">
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          See all images
        </button>
      </div>
    </section>
  );
};

export default About;
