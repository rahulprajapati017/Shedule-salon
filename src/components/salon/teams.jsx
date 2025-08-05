import React from "react";
import { Star } from "lucide-react";

const teamMembers = [
  { name: "Prince", role: "Barber", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Samir", role: "Barber", image: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Jamal", role: "Barber – Braider", image: "https://randomuser.me/api/portraits/men/13.jpg" },
  { name: "Milad", role: "Barber", image: "https://randomuser.me/api/portraits/men/14.jpg" },
  { name: "John", role: "Barber – Dreads", image: "https://randomuser.me/api/portraits/men/15.jpg" },
  { name: "Kim", role: "Hairstylist", image: "https://randomuser.me/api/portraits/men/16.jpg" },
  { name: "Jashu", role: "Therapist / Braider", image: "https://randomuser.me/api/portraits/women/17.jpg" },
  { name: "Omid", role: "Barber–Braider", image: "https://randomuser.me/api/portraits/men/18.jpg" },
];

const Team = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Team</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white px-1.5 py-0.5 rounded-full flex items-center shadow text-xs font-medium">
                5.0 <Star size={14} className="ml-1 fill-black stroke-black" />
              </div>
            </div>
            <p className="mt-2 font-medium">{member.name}</p>
            <p className="text-sm text-gray-600 truncate w-32">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
