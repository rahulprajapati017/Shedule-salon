import React, { useEffect, useState } from 'react';
import { view } from '../data/allapi';

const NewToFresha = () => {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
   const fetchSalons = async () => {
  try {
    const response = await fetch(view.GET_ALL_SALOON); // Your API endpoint
    const result = await response.json();

    if (result.success && Array.isArray(result.data)) {
      const transformedData = result.data.map((salon) => {
        const totalReviews = salon.reviews.length;
        const avgRating =
          totalReviews > 0
            ? (
                salon.reviews.reduce((sum, review) => sum + review.rating, 0) /
                totalReviews
              ).toFixed(1)
            : '0.0';

        const serviceCategories = salon.saloonservices?.map((service) => service.name) || [];

        return {
          id: salon._id,
          name: salon.saloonName,
          rating: avgRating,
          reviews: totalReviews,
          location: salon.saloonLocation,
          tag: serviceCategories, // Array of category names like ['Hairs', 'Nails']
          image: salon.image?.url || '',
        };
      });

      setSalons(transformedData);
    }
  } catch (error) {
    console.error('Failed to fetch salons:', error);
  }
};


    fetchSalons();
  }, []);

  return (
    <section className="w-full px-6 lg:px-16 py-8">
      <h2 className="text-2xl font-bold mb-4">New as salon</h2>

      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {salons.map((salon) => (
          <div key={salon.id} className="min-w-[280px] max-w-sm rounded shadow-sm">
            <img
              src={salon.image}
              alt={salon.name}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-semibold text-sm leading-tight">{salon.name}</h3>
              <p className="text-sm font-bold mt-1">
                ⭐ {salon.rating}{' '}
                <span className="text-gray-500">({salon.reviews})</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">{salon.location}</p>
             <div className="flex flex-wrap gap-2 mt-2">
  {salon.tag.map((tagName, index) => (
    <span
      key={index}
      className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
    >
      {tagName}
    </span>
  ))}
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewToFresha;