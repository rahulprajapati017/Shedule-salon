import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import facial from '../assets/react.svg';
import waxing from '../assets/react.svg';
import bleach from '../assets/react.svg';
import haircut from '../assets/react.svg';

const Services = () => {
  const services = [
    { img: facial, title: 'Facial & Cleanups' },
    { img: waxing, title: 'Waxing' },
    { img: bleach, title: 'Bleach & Detan' },
    { img: haircut, title: 'Haircut & Styling' },
  ];

  return (
    <section className="py-16 px-6 lg:px-24 bg-white">
      {/* Heading */}
      <h2 className="text-3xl text-center font-medium mb-8">
        <span className="text-pink-600 font-bold">Salon-At-Home</span>{' '}
        <span className="text-blue-900">Services We Offer</span>
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-pink-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-700">
          Female Service
        </button>
        <button className="bg-gray-100 text-blue-900 px-5 py-2 rounded-full font-semibold hover:bg-gray-200">
          Male Service
        </button>
      </div>

      {/* Slider */}
      <div className="flex items-center justify-center gap-4">
        <button className="text-xl text-gray-500 hover:text-black">
          <FaChevronLeft />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-xl p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <img src={service.img} alt={service.title} className="w-32 h-32 object-cover rounded" />
              <p className="mt-4 font-semibold text-center">{service.title}</p>
            </div>
          ))}
        </div>

        <button className="text-xl text-gray-500 hover:text-black">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Services;