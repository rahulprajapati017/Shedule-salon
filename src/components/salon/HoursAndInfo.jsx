import React from "react";
import {
  Check,
  Smartphone,
  Baby,
  Users,
  ParkingCircle,
  Bus,
  Leaf,
} from "lucide-react";

const openingHours = [
  { day: "Monday", time: "10:00am – 10:00pm" },
  { day: "Tuesday", time: "10:00am – 10:00pm" },
  { day: "Wednesday", time: "10:00am – 10:00pm" },
  { day: "Thursday", time: "10:00am – 10:00pm" },
  { day: "Friday", time: "10:00am – 10:00pm" },
  { day: "Saturday", time: "10:00am – 10:00pm" },
  { day: "Sunday", time: "10:00am – 10:00pm" },
];

const additionalInfo = [
  { label: "Instant Confirmation", icon: <Check size={16} /> },
  { label: "Pay by app", icon: <Smartphone size={16} /> },
  { label: "Adults only", icon: <Users size={16} /> },
  { label: "Kid-friendly", icon: <Baby size={16} /> },
  { label: "Wheelchair accessible", icon: <span>🦽</span> },
  { label: "Parking available", icon: <ParkingCircle size={16} /> },
  { label: "Near public transport", icon: <Bus size={16} /> },
  { label: "Environmentally friendly", icon: <Leaf size={16} /> },
];

const HoursAndInfo = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Opening times */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Opening times</h2>
        <ul className="space-y-2">
          {openingHours.map(({ day, time }) => (
            <li key={day} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>{day}</span>
              </div>
              <span className={`font-medium ${day === "Monday" ? "text-black" : "text-gray-700"}`}>
                {time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional info */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Additional information</h2>
        <ul className="space-y-2">
          {additionalInfo.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-800">
              <span className="text-gray-700">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HoursAndInfo;
