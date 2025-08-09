import { Star, TrendingUp, DollarSign, MapPin, Clock, Award } from "lucide-react";

const OPTIONS = [
  { 
    id: 'POPULAR', 
    label: 'Popular', 
    icon: TrendingUp,
    description: 'Most booked salons'
  },
  { 
    id: 'RATING', 
    label: 'Highest Rated', 
    icon: Star,
    description: 'Best customer reviews'
  },
  { 
    id: 'PRICE_LOW', 
    label: 'Price: Low to High', 
    icon: DollarSign,
    description: 'Budget-friendly first'
  },
  { 
    id: 'PRICE_HIGH', 
    label: 'Price: High to Low', 
    icon: DollarSign,
    description: 'Premium first'
  },
  { 
    id: 'DISTANCE', 
    label: 'Nearest', 
    icon: MapPin,
    description: 'Closest to you'
  },
  { 
    id: 'NEWEST', 
    label: 'Newest', 
    icon: Clock,
    description: 'Recently added'
  },
  { 
    id: 'FEATURED', 
    label: 'Featured', 
    icon: Award,
    description: 'Premium partners'
  },
];

export default function SortBar({ value, onChange }) {
  const selectedOption = OPTIONS.find(option => option.id === value);

  return (
    <div className="bg-white border-b shadow-sm sticky top-[64px] z-30">
      <div className="p-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 text-sm">Sort by:</span>
            {selectedOption && (
              <div className="flex items-center gap-1 text-purple-600 text-xs bg-purple-50 px-2 py-1 rounded-full">
                <selectedOption.icon className="w-3 h-3" />
                <span>{selectedOption.description}</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 ml-auto">
            {OPTIONS.map(option => {
              const IconComponent = option.icon;
              const isActive = value === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => onChange(option.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200 border
                    ${isActive 
                      ? 'bg-purple-600 border-purple-600 text-white shadow-md transform scale-105' 
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600'
                    }
                  `}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span>{option.label}</span>
                  {isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Quick stats or additional info */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>✨ 324 salons available</span>
            <span>📍 Within 10km radius</span>
            <span>⚡ Real-time availability</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Live updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}