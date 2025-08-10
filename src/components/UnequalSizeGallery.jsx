import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BASE_URL, view } from '../data/allapi';
// import { BASE_URL, view } from '../data/allapi';

const UnequalSizeGallery = () => {
  const [columnCount, setColumnCount] = useState(4);
  const [isHovering, setIsHovering] = useState(false);
  const [images, setImages] = useState([]);

  // Define fixed heights (you can customize these further)
  const fixedHeights = [
    450, 200, 350, 300, 500, 250, 400, 320, 280, 420,
    350, 220, 480, 180, 360
  ];

  const fetchGallerydata = async () => {
    try {
      const response = await fetch(`${BASE_URL}${view.GET_ALL_GALLERY_BANNER}`);
      const res = await response.json();

      if (res.success && res.data?.length > 0) {
        const formattedImages = res.data.map((item, index) => ({
          id: item._id,
          src: item.background.url,
          height: fixedHeights[index % fixedHeights.length] // Reuse if more images than heights
        }));
        setImages(formattedImages);
      }
    } catch (error) {
      console.error("Error in Fetching gallery", error);
    }
  };

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;
      if (width < 640) setColumnCount(2);
      else if (width < 1024) setColumnCount(3);
      else if (width < 1280) setColumnCount(4);
      else setColumnCount(5);
    };

    fetchGallerydata();
    fetchGallerydata();
    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  const distributeImages = () => {
    const columns = Array.from({ length: columnCount }, () => []);
    const columnHeights = Array(columnCount).fill(0);

    images.forEach((image) => {
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columns[shortestColumnIndex].push(image);
      columnHeights[shortestColumnIndex] += image.height + 16;
    });

    return columns;
  };

  const imageColumns = distributeImages();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Masonry Gallery</h1>
          <p className="text-gray-600">Images from API in a responsive masonry layout</p>
        </div>

        {/* Masonry Grid */}
        <div className="flex gap-4" style={{ height: 'calc(100vh - 200px)' }}>
          {imageColumns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              style={{ height: '100%', scrollBehavior: 'smooth' }}
              animate={{ overflowY: isHovering ? 'hidden' : 'auto' }}
            >
              {column.map((image) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ height: `${image.height}px` }}
                
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <img
                    src={image.src}
                    alt={`Gallery image ${image.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnequalSizeGallery;