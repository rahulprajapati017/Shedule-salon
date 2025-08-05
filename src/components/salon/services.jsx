import React, { useState } from "react";

const categories = [
  "Featured",
  "Haircut",
  "Haircut and beard",
  "Beard",
  "Facial treatments",
  "Braid By Omid Shirali and Te..."
];

const services = [
  {
    title: "Haircut and Beard Combo",
    duration: "1 hr",
    price: "from AED 200",
    category: "Featured",
  },
  {
    title: "Taper Fade",
    duration: "40 mins – 1 hr",
    price: "from AED 150",
    category: "Featured",
  },
  {
    title: "Classic Haircut",
    duration: "30 mins • Male only",
    price: "from AED 120",
    category: "Featured",
  },
  {
    title: "Skin Fade",
    duration: "50 mins",
    price: "from AED 150",
    category: "Featured",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  const filteredServices = services.filter(
    (service) => service.category === activeTab
  );

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Services</h2>

      {/* Tabs */}
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hid">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(cat)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border  ${
              activeTab === cat
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="space-y-4 mt-4">
        {filteredServices.map((service, idx) => (
          <div
            key={idx}
            className={`border rounded-xl px-4 py-3 flex justify-between items-center ${
              idx === 1 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <div>
              <h4 className="font-semibold text-base">{service.title}</h4>
              <p className="text-sm text-gray-500">{service.duration}</p>
              <p className="text-sm text-gray-700 mt-1">{service.price}</p>
            </div>
            <button className="border border-gray-400 px-4 py-1 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              Book
            </button>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="mt-6">
        <button className="border border-black px-4 py-2 rounded text-sm font-medium hover:bg-black hover:text-white transition">
          See all
        </button>
      </div>
    </section>
  );
};

export default Services;
