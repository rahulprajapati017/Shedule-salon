import React, { useState, useEffect } from 'react';

const UnequalSizeGallery = () => {
  const [columnCount, setColumnCount] = useState(4);

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop", height: 450 },
    { id: 2, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop", height: 200 },
    { id: 3, src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=350&fit=crop", height: 350 },
    { id: 4, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop", height: 300 },
    { id: 5, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=500&fit=crop", height: 500 },
    { id: 6, src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=250&fit=crop", height: 250 },
    { id: 7, src: "https://images.unsplash.com/photo-1520637836862-4d197d17c787?w=300&h=400&fit=crop", height: 400 },
    { id: 8, src: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=320&fit=crop", height: 320 },
    { id: 9, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=280&fit=crop", height: 280 },
    { id: 10, src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=420&fit=crop", height: 420 },
    { id: 11, src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=350&fit=crop", height: 350 },
    { id: 12, src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=220&fit=crop", height: 220 },
    { id: 13, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=480&fit=crop", height: 480 },
    { id: 14, src: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=300&h=180&fit=crop", height: 180 },
    { id: 15, src: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=300&h=360&fit=crop", height: 360 }
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
            <div
              key={columnIndex}
              className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              style={{ height: '100%' }}
            >
              {column.map((image) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  style={{
                    height: `${image.height}px`
                  }}
                >
                  <img
                    src={image.src}
                    alt={`Gallery image ${image.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnequalSizeGallery;
