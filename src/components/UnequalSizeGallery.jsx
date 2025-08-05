import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/pictureGallery/photo1.jpg';
import photo2 from '../assets/pictureGallery/photo2.jpg'; 
import photo3 from '../assets/pictureGallery/photo3.jpg';
import photo4 from '../assets/pictureGallery/photo4.jpg';
import photo5 from '../assets/pictureGallery/photo5.jpg';
import photo6 from '../assets/pictureGallery/photo6.jpeg';
import photo7 from '../assets/pictureGallery/photo1.jpg';
import photo8 from '../assets/pictureGallery/photo8.jpeg';

const UnequalSizeGallery = () => {
  const [columnCount, setColumnCount] = useState(4);
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    { id: 1, src: photo1, height: 450 },
    { id: 2, src: photo2, height: 200 },
    { id: 3, src: photo3, height: 350 },
    { id: 4, src: photo4, height: 300 },
    { id: 5, src: photo5, height: 500 },
    { id: 6, src: photo6, height: 250 },
    { id: 7, src: photo7, height: 400 },
    { id: 8, src: photo8, height: 320 },
    { id: 9, src: photo1, height: 280 },
    { id: 10, src: photo2, height: 420 },
    { id: 11, src: photo3, height: 350 },
    { id: 12, src: photo4, height: 220 },
    { id: 13, src: photo5, height: 480 },
    { id: 14, src: photo6, height: 180 },
    { id: 15, src: photo7, height: 360 }
  ];

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;
      if (width < 640) setColumnCount(2);
      else if (width < 1024) setColumnCount(3);
      else if (width < 1280) setColumnCount(4);
      else setColumnCount(5);
    };

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
          <p className="text-gray-600">Images with unequal sizes in a dynamic layout</p>
        </div>

        {/* Masonry Grid */}
        <div className="flex gap-4" style={{ height: 'calc(100vh - 200px)' }}>
          {imageColumns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              className={`flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}
              style={{
                height: '100%',
                scrollBehavior: 'smooth'
              }}
              animate={{
                overflowY: isHovering ? 'hidden' : 'auto'
              }}
            >
              {column.map((image) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  style={{
                    height: `${image.height}px`
                  }}
                  onMouseEnter={() => setIsHovering(true)}
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
