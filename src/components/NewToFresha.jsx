import React from 'react';
import photo1 from '../assets/pictureGallery/photo1.jpg';
import photo2 from '../assets/pictureGallery/photo2.jpg'; 
import photo3 from '../assets/pictureGallery/photo3.jpg';
import photo4 from '../assets/pictureGallery/photo4.jpg';

const salons = [
  {
    id: 1,
    name: "The Mani Pedi Spa, AIPL Joy Street",
    rating: "5.0",
    reviews: 12,
    location: "Sector 66, Gurugram",
    tag: "Nails",
    image: photo1
  },
  {
    id: 2,
    name: "Bevel Unisex Salon",
    rating: "5.0",
    reviews: 3,
    location: "Kathmandu, Nepal, Kathmandu, Nepal",
    tag: "Hair Salon",
    image: photo3
  },
  {
    id: 3,
    name: "Blue Tree Spa",
    rating: "5.0",
    reviews: 4,
    location: "Indirapuram, Ghaziabad",
    tag: "Massage",
    image: photo2
  },
  {
    id: 4,
    name: "The Next Level Salon",
    rating: "5.0",
    reviews: 3,
    location: "Sanepa, Lalitpur",
    tag: "Hair Salon",
    image: photo4
  }
];

const NewToFresha = () => {
  return (
    <section className="w-full px-6 lg:px-16 py-8">
      <h2 className="text-2xl font-bold mb-4">New as salon</h2>
      
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {salons.map((salon) => (
          <div key={salon.id} className="min-w-[280px] max-w-sm rounded shadow-sm ">
            <img src={salon.image} alt={salon.name} className="w-full h-48 object-cover rounded-t" />
            <div className="p-4">
              <h3 className="font-semibold text-sm leading-tight">{salon.name}</h3>
              <p className="text-sm font-bold mt-1">⭐ {salon.rating} <span className="text-gray-500">({salon.reviews})</span></p>
              <p className="text-sm text-gray-500 mt-1">{salon.location}</p>
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 mt-2 rounded-full">{salon.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewToFresha;
