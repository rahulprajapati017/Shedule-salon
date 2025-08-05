import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ferry T",
    date: "Sun, 20 Jul, 2025 at 5:33 pm",
    text: "Jamal is great!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marc",
    date: "Sun, 6 Jul, 2025 at 11:55 am",
    text: "Perfecto",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Karlton R",
    date: "Thu, 3 Jul, 2025 at 10:09 pm",
    text: "Excellent, Kim is very good.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Bogomil I",
    date: "Mon, 30 Jun, 2025 at 12:10 am",
    text: "Samir was great!",
    avatar: "", // No image: will fallback to initial
  },
  {
    name: "Albert W",
    date: "Fri, 13 Jun, 2025 at 2:06 pm",
    text: "Always 100% with my guy Milad",
    avatar: "", // Will show initials
  },
  {
    name: "Oliver S",
    date: "Wed, 11 Jun, 2025 at 9:46 pm",
    text:
      "The perfect haircut. The perfect service. The perfect espresso with it. All in all: just perfect. An...",
    avatar: "", // Will show initials
  },
];

const ReviewCard = ({ name, date, text, avatar }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex gap-4 items-start">
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
          {initials}
        </div>
      )}

      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-gray-500 mb-1">{date}</p>

        {/* Stars */}
        <div className="flex gap-1 mb-1">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <Star key={idx} size={14} fill="black" stroke="black" />
            ))}
        </div>

        <p className="text-sm text-gray-800">{text}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-2">Reviews</h2>

      {/* Stars & Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} size={18} fill="black" stroke="black" />
            ))}
        </div>
        <span className="font-medium">5.0</span>
        <span className="text-sm text-purple-600 cursor-pointer">(799)</span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>

      {/* See All Button */}
      <div className="mt-8">
        <button className="px-4 py-2 border border-black text-black text-sm rounded hover:bg-black hover:text-white transition">
          See all
        </button>
      </div>
    </section>
  );
};

export default Reviews;
