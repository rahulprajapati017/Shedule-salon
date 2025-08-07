import React, { useEffect, useState } from 'react';
import { view } from '../data/allapi';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(view.GET_ALL_PROMOS); // 🔁 Use your real API endpoint
        const result = await res.json();

        if (result.success && Array.isArray(result.data)) {
          setCategories(result.data);
        } else {
          console.error("Unexpected response format:", result);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading categories...</div>;
  }

  return (
    <section className="grid md:grid-cols-2 gap-6 px-6 py-12 bg-gray-100">
      {categories.map((cat, idx) => (
        <div
          key={cat._id || idx}
          className="group relative h-[450px] flex items-center justify-center text-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={cat.background?.url} // ✅ Use Cloudinary image URL
            alt={cat.title}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          <div className="relative z-10 text-center p-6 max-w-md bg-black/40 backdrop-blur-sm rounded-md">
            <h2 className="text-3xl font-bold mb-4">{cat.title}</h2>
            <p className="text-sm mb-6">{cat.description}</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-md font-semibold transition duration-300">
              Read More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;