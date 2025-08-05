import React from 'react';
import { FaPaintBrush, FaCut, FaRegSmile, FaSpa, FaMagic } from 'react-icons/fa';

const services = [
  { icon: <FaPaintBrush size={70} />, title: 'NAILS' },
  { icon: <FaCut size={70} />, title: 'BROW' },
  { icon: <FaRegSmile size={70} />, title: 'HAIR' },
  { icon: <FaSpa size={70} />, title: 'COSMETOLOGY' },
  { icon: <FaMagic size={70} />, title: 'MAKEUP' },
];

const ServiceMenu = () => {
  return (
    <section className="w-full py-16 bg-gray-100 text-center">
      <h2 className="text-5xl font-semibold text-gray-900 mb-8">Our Service</h2>

      <div className="flex flex-wrap justify-center gap-40 mb-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 text-gray-700 hover:text-black transition"
          >
            <div>{service.icon}</div>
            <p className="text-sm font-medium">{service.title}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-2xl max-w-xl mx-auto mb-6">
        Get your nails done for great mood. Simple pleasures can make your week, not just day.
      </p>

      <button className="px-6 py-3 bg-black text-white uppercase tracking-widest text-sm hover:bg-gray-800 transition">
        View Services
      </button>
    </section>
  );
};

export default ServiceMenu;
