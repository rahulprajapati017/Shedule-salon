import React from 'react';
import { MapPin, Star, Clock } from 'lucide-react';

const NearbySalons = () => {
  // Sample salon data - you can replace this with your actual data
  const salons = [
    {
      id: 1,
      name: "Elegance Hair Studio",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop",
      description: "Premium hair styling and beauty treatments with experienced professionals. Specializing in modern cuts, coloring, and bridal makeup.",
      rating: 4.8,
      reviewCount: 124,
      distance: "0.5 km",
      location: "Downtown Plaza"
    },
    {
      id: 2,
      name: "Luxe Beauty Lounge",
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=400&h=300&fit=crop",
      description: "Full-service beauty salon offering haircuts, styling, facials, manicures, and spa treatments in a relaxing atmosphere.",
      rating: 4.6,
      reviewCount: 89,
      distance: "1.2 km",
      location: "City Center"
    },
    {
      id: 3,
      name: "Studio Glamour",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
      description: "Trendy salon specializing in contemporary hairstyles, hair coloring, and professional makeup services for all occasions.",
      rating: 4.9,
      reviewCount: 156,
      distance: "0.8 km",
      location: "Fashion District"
    },
    {
      id: 4,
      name: "Serene Spa & Salon",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
      description: "Comprehensive beauty and wellness center offering hair services, skincare treatments, and relaxing spa experiences.",
      rating: 4.7,
      reviewCount: 203,
      distance: "1.5 km",
      location: "Wellness Quarter"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleBookAppointment = (salonName) => {
    // You can implement your booking logic here
    alert(`Booking appointment at ${salonName}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Top Salons Near You</h2>
        <p className="text-gray-600">Discover the best beauty salons in your area</p>
      </div>
      
      <div className="flex flex-wrap gap-6 justify-center">
        {salons.map((salon) => (
          <div
            key={salon.id}
            className="flex flex-col bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 w-full sm:w-80 lg:w-96"
          >
            {/* Image with Overlay */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={salon.image}
                alt={salon.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-gray-800 flex items-center shadow-lg">
                <MapPin className="w-4 h-4 mr-1 text-purple-600" />
                {salon.distance}
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                {salon.location}
              </div>
            </div>
            
            {/* Content - Flex grow to push button to bottom */}
            <div className="flex flex-col flex-grow p-6">
              {/* Title */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{salon.name}</h3>
              </div>
              
              {/* Rating with better styling */}
              <div className="flex items-center mb-4 bg-yellow-50 p-3 rounded-lg">
                <div className="flex items-center mr-3">
                  {renderStars(salon.rating)}
                </div>
                <span className="text-lg font-bold text-gray-800">{salon.rating}</span>
                <span className="text-sm text-gray-600 ml-2">({salon.reviewCount} reviews)</span>
              </div>
              
              {/* Description - Flex grow to take available space */}
              <div className="flex-grow mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {salon.description}
                </p>
              </div>
              
              {/* Book Appointment Button - Always at bottom */}
              <button
                onClick={() => handleBookAppointment(salon.name)}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Clock className="w-5 h-5" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbySalons;