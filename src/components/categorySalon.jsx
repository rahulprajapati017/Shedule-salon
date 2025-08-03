import React from 'react';

const barbers = [
  {
    name: "Ravi",
    specialty: "Beard Expert",
    image: "https://i.imgur.com/XYZ123.png",
  },
  {
    name: "Amit",
    specialty: "Fade Master",
    image: "https://i.imgur.com/ABC456.png",
  },
  {
    name: "Rahul",
    specialty: "Hair Designer",
    image: "https://i.imgur.com/DEF789.png",
  },
  // Add more barbers as needed
];

const BarberCategory = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Meet Our Barbers</h2>
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {barbers.map((barber, index) => (
          <div key={index} className="min-w-[150px] text-center">
            <img
              src={barber.image}
              alt={barber.name}
              className="w-24 h-24 rounded-full mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h3 className="mt-2 font-semibold">{barber.name}</h3>
            <p className="text-sm text-gray-500">{barber.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BarberCategory;
