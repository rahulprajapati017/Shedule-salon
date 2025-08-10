import React, { useState } from "react";
import { Star, MapPin, DollarSign, Scissors, Tag, Filter, ChevronDown, ChevronUp } from "lucide-react";

export default function FilterSidebar() {
  const [filters, setFilters] = useState({
    rating: [],
    priceRange: [],
    discounts: false,
    services: [],
    location: [],
  });

  const [expandedSections, setExpandedSections] = useState({
    rating: false,
    priceRange: false,
    offers: false,
    services: false,
    location: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const ratings = [
    { label: "5 stars", stars: 5, count: 42 },
    { label: "4+ stars", stars: 4, count: 128 },
    { label: "3+ stars", stars: 3, count: 215 },
    { label: "2+ stars", stars: 2, count: 89 },
    { label: "Any rating", stars: 1, count: 35 },
  ];

  const priceRanges = [
    { label: "$0 - $25", range: "budget", count: 156 },
    { label: "$25 - $50", range: "mid", count: 203 },
    { label: "$50 - $100", range: "premium", count: 98 },
    { label: "$100+", range: "luxury", count: 41 },
  ];

  const services = [
    { label: "HAIR CUTTING & STYLING", icon: Scissors, count: 187 },
    { label: "HAIR COLORING", icon: Tag, count: 142 },
    { label: "BEARD GROOMING", icon: Scissors, count: 98 },
    { label: "FACIAL TREATMENTS", icon: Star, count: 76 },
    { label: "MASSAGE THERAPY", icon: Star, count: 52 },
    { label: "NAIL SERVICES", icon: Star, count: 89 },
  ];

  const locations = [
    { label: "Downtown", count: 89 },
    { label: "Mall Areas", count: 67 },
    { label: "Residential", count: 134 },
    { label: "Business District", count: 45 },
  ];

  const toggleFilter = (category, value) => {
    setFilters(prev => {
      if (category === "discounts") {
        return { ...prev, discounts: !prev.discounts };
      }
      if (prev[category].includes(value)) {
        return { ...prev, [category]: prev[category].filter(v => v !== value) };
      } else {
        return { ...prev, [category]: [...prev[category], value] };
      }
    });
  };

  const clearFilters = () => {
    setFilters({ rating: [], priceRange: [], discounts: false, services: [], location: [] });
  };

  const getActiveFiltersCount = () => {
    return filters.rating.length + filters.priceRange.length + filters.services.length + 
           filters.location.length + (filters.discounts ? 1 : 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg  p-4 max-h-[800px] flex flex-col">
      {/* Header */}
              <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-600"/>
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        </div>
        {getActiveFiltersCount() > 0 && (
          <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
            {getActiveFiltersCount()} active
          </span>
        )}
      </div>

      <div className="overflow-y-auto flex-1 space-y-2 scrollbar-hide max-h-80vh">
        {/* Rating Filter */}
        <div className="border border-gray-200 rounded-lg">
          <button 
            onClick={() => toggleSection('rating')}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <h3 className="font-semibold text-gray-800">Rating</h3>
              {filters.rating.length > 0 && (
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
                  {filters.rating.length}
                </span>
              )}
            </div>
            {expandedSections.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.rating && (
            <div className="border-t p-3 space-y-2">
              {ratings.map((r, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={filters.rating.includes(r.stars)}
                    onChange={() => toggleFilter("rating", r.stars)}
                    className="accent-purple-600 w-4 h-4"
                  />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex items-center">
                      {[...Array(Math.min(r.stars, 5))].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                      {r.stars === 4 && <span className="text-sm text-gray-500 ml-1">& up</span>}
                      {r.stars === 3 && <span className="text-sm text-gray-500 ml-1">& up</span>}
                      {r.stars === 2 && <span className="text-sm text-gray-500 ml-1">& up</span>}
                    </div>
                    <span className="ml-auto text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">
                      {r.count}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="border border-gray-200 rounded-lg">
          <button 
            onClick={() => toggleSection('priceRange')}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <h3 className="font-semibold text-gray-800">Price Range</h3>
              {filters.priceRange.length > 0 && (
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
                  {filters.priceRange.length}
                </span>
              )}
            </div>
            {expandedSections.priceRange ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.priceRange && (
            <div className="border-t p-3 space-y-2">
              {priceRanges.map((price, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={filters.priceRange.includes(price.range)}
                    onChange={() => toggleFilter("priceRange", price.range)}
                    className="accent-purple-600 w-4 h-4"
                  />
                  <span className="flex-1">{price.label}</span>
                  <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {price.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Special Offers */}
        <div className="border border-gray-200 rounded-lg">
          <button 
            onClick={() => toggleSection('offers')}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-red-500" />
              <h3 className="font-semibold text-gray-800">Special Offers</h3>
              {filters.discounts && (
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
                  1
                </span>
              )}
            </div>
            {expandedSections.offers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.offers && (
            <div className="border-t p-3">
              <label className="flex items-center gap-3 cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={filters.discounts}
                  onChange={() => toggleFilter("discounts")}
                  className="accent-purple-600 w-4 h-4"
                />
                <span className="flex-1">Salons with discounts</span>
                <span className="text-gray-500 text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  42
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Services Filter */}
        <div className="border border-gray-200 rounded-lg">
          <button 
            onClick={() => toggleSection('services')}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Scissors className="w-4 h-4 text-purple-600" />
              <h3 className="font-semibold text-gray-800">Services</h3>
              {filters.services.length > 0 && (
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
                  {filters.services.length}
                </span>
              )}
            </div>
            {expandedSections.services ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.services && (
            <div className="border-t p-3 space-y-2">
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={filters.services.includes(service.label)}
                      onChange={() => toggleFilter("services", service.label)}
                      className="accent-purple-600 w-4 h-4"
                    />
                    <IconComponent className="w-4 h-4 text-gray-500" />
                    <span className="flex-1 text-sm">{service.label}</span>
                    <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">
                      {service.count}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Location Filter */}
        <div className="border border-gray-200 rounded-lg">
          <button 
            onClick={() => toggleSection('location')}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <h3 className="font-semibold text-gray-800">Location</h3>
              {filters.location.length > 0 && (
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
                  {filters.location.length}
                </span>
              )}
            </div>
            {expandedSections.location ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.location && (
            <div className="border-t p-3 space-y-2">
              {locations.map((location, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={filters.location.includes(location.label)}
                    onChange={() => toggleFilter("location", location.label)}
                    className="accent-purple-600 w-4 h-4"
                  />
                  <span className="flex-1">{location.label}</span>
                  <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {location.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="border-t pt-4 flex gap-3 mt-6">
        <button
          onClick={clearFilters}
          className="flex-1 text-purple-600 font-semibold hover:bg-purple-50 py-2 px-4 rounded-lg border border-purple-200 transition-colors"
        >
          Clear All
        </button>
        <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-md">
          Apply Filters
        </button>
      </div>
    </div>
  );
}