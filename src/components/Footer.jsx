import React, { useEffect, useState } from 'react';
import { view } from '../data/allapi';

const Footer = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(view.GET_INFO); // Replace with your actual endpoint
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setInfo(data.data[0]);
        }
      } catch (error) {
        console.error('Failed to fetch footer information:', error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <footer className="bg-pink-800 text-gray-300">

      {/* Top CTA Section */}
      <div className="text-center px-4 py-12 border-b border-gray-700">
        <h2 className="text-lg md:text-xl font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
          {info?.heading || "Book now and see what our friendly, highly skilled and inspired team can do for you. "}
          <span className="text-yellow-500 font-semibold">
            You will look good and feel great.
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="border border-white px-6 py-2 text-sm rounded hover:bg-white hover:text-black transition-all duration-300">
            MAKE AN APPOINTMENT
          </button>
          <button className="bg-yellow-500 px-6 py-2 text-sm rounded hover:bg-yellow-600 text-black font-semibold transition-all duration-300">
            CALL / TEXT {info?.phone1 || '437-9888'}
          </button>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="grid md:grid-cols-3 gap-10 px-6 py-12 lg:px-24">

        {/* Left */}
        <div>
          <div className="text-yellow-500 text-2xl font-bold mb-4">SalonBrand</div>
          <p className="text-sm mb-4">
            {info?.address || 'ABC Street, Highway Crossroads'}<br />
            New Town, India 2025
          </p>
          <p className="text-sm">Phone: +91 {info?.phone1 || '98765 43210'}</p>
        </div>

        {/* Center */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {info?.quickLinks?.map((link, index) => (
              <li key={index}><a href="#" className="hover:text-white">{link}</a></li>
            ))}
          </ul>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 text-sm rounded-md font-medium">
            Make an Appointment
          </button>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
          <ul className="text-sm space-y-1">
            {info?.buisnessHours &&
              Object.entries(info.buisnessHours).map(([day, hours], index) => (
                <li key={index}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}:{" "}
                  {hours.isOpen ? `${hours.start} - ${hours.end}` : "Closed"}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs py-4 border-t border-gray-700 text-gray-500">
        © {new Date().getFullYear()} SalonBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;