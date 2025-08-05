import React from 'react';
import img1 from '../assets/pictureGallery/photo1.jpg';
import img2 from '../assets/pictureGallery/photo2.jpg';

const categories = [
  {
    title: "HAIR",
    description:
      "Our passion for hair means you are guaranteed up-to-the-minute techniques and only the best professional products to leave your hair looking and feeling great at all times. We use Olaplex treatment with every colour.",
    image: img1,
  },
  {
    title: "BEAUTY",
    description:
      "We all know the importance of a good cut/trim, but to look your best you need the complete package — skin free from ingrown hairs, great brows to add structure, great lashes to accentuate eyes, great makeup to highlight contours – overall, great hair to frame it all.",
    image: img2,
  },
];

const CategorySection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6 px-6 py-12 bg-gray-100">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="group relative h-[450px] flex items-center justify-center text-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={cat.image}
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
