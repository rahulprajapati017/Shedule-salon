import React from 'react';
import hair from '../assets/salon.jpg';
import nail from '../assets/salon.jpg';
import beauty from '../assets/salon.jpg';
import tanning from '../assets/salon.jpg';
import tattoo from '../assets/salon.jpg';
import cosmetology from '../assets/salon.jpg';
import makeup from '../assets/salon.jpg';
import bridal from '../assets/salon.jpg';
import spa from '../assets/salon.jpg';
import mobile from '../assets/salon.jpg';

const salonTypes = [
  { img: hair, title: "Hair Salon" },
  { img: nail, title: "Nail Salon" },
  { img: beauty, title: "Beauty Salon" },
  { img: tanning, title: "Tanning Salon" },
  { img: tattoo, title: "Tattoo Studio" },
  { img: cosmetology, title: "Cosmetology Services" },
  { img: makeup, title: "Make-up Studio" },
  { img: bridal, title: "Bridal Salon" },
  { img: spa, title: "Spa Salon" },
  { img: mobile, title: "Mobile Salon" },
];

const SalonTypes = () => {
  return (
    <section className="w-full py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Appointy caters to all types of single & multi-location salon businesses
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base">
        Online salon booking system helps business owners offer 1:1 beauty services, virtual product & skin consultations, group appointments, & more
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-6xl mx-auto px-6">
        {salonTypes.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
            <p className="text-sm font-medium text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalonTypes;
