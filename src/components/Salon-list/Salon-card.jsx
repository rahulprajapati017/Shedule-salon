import { Star, MapPin, DollarSign } from "lucide-react";

export default function SalonCard() {
  return (
    <div className="w-auto mb-4">
      <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <div className="h-64 md:h-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Luxe Beauty Salon Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Luxe Beauty Salon
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                Experience premium beauty services in our modern, relaxing environment. 
                We offer cutting-edge treatments with personalized care from our expert stylists 
                and beauticians who are passionate about making you look and feel your best.
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold text-gray-700">4.8</span>
                  <span className="text-sm text-gray-500 ml-1">(124 reviews)</span>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-gray-600">Downtown Plaza, 123 Beauty Street</span>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-600 mr-1" />
                  <span className="text-lg font-bold text-gray-800">Starting from $25</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
                  Book Now
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">Haircut, styling, and basic treatments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}