import { useState, useMemo } from 'react';
import Filters from '../components/Salon-list/filters';
import SortBar from '../components/Salon-list/SortBar';
import SalonCard from '../components/Salon-list/Salon-card';
import salonsJson from '../data/salons.json'; // updated import

export default function SalonListing() {
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('POPULAR');

  /* --- derive visible list --- */
  const salons = useMemo(() => {
    let list = [...salonsJson];

    /* filtering */
    if (filters.categories?.length)
      list = list.filter(s => filters.categories.every(c => s.categories.includes(c)));
    if (filters.minPrice)
      list = list.filter(s => s.price >= filters.minPrice && s.price <= filters.maxPrice);
    if (filters.services?.length)
      list = list.filter(s => filters.services.every(a => s.services.includes(a)));

    /* sorting */
    switch (sortBy) {
      case 'PRICE_LOW':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'PRICE_HIGH':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'RATING':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'POPULAR'
        // Popularity could be a mix of ratings and reviews
        list.sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center gap-4 p-4">
          <input
            type="text"
            placeholder="Search for a salon or service" // updated placeholder
            className="flex-1 input input-bordered w-full max-w-xl"
          />
          {/* date/time pickers for appointments omitted for brevity 
        </div>
      </header> */}

      <main className="w-auto mx-auto flex">
        <aside className="w-72 shrink-0 hidden lg:block bg-white">
          <Filters value={filters} onChange={setFilters} />
        </aside>

        <section className="flex-1">
          <SortBar value={sortBy} onChange={setSortBy} />
          <div className="p-4 gap-6">
            {salons.map(s => (
              <SalonCard key={s.id} salon={s} /> // updated component
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
