import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    { 
      src: './hero.jpeg',
      alt: 'Traditional Dance Performance' 
    },
    {
      src: './rain.jpeg', 
      alt: 'African Cultural Festival'
    },
    {
      src: 'https://images.unsplash.com/photo-1596683858875-63d85de92743',
      alt: 'Traditional African Attire'
    },
    {
      src: './smile.jpeg',
      alt: 'African Art and Craft'
    },
    {
      src: './old.jpeg',
      alt: 'Community Celebration'
    },
    {
      src: './younglady.jpeg',
      alt: 'Traditional Music Performance'
    },
  ];

  const breakpointColumns = {
    default: 4,
    1100: 4,
    700: 2,
    500: 1
  };

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map(image => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false); // Handle load errors
        });
      });
      await Promise.all(imagePromises);
      setLoading(false);
    };
    loadImages();
  }, []);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto -ml-6"
          columnClassName="pl-6"
        >
          {loading ? (
            // Skeleton loader items
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="mb-6 relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="animate-pulse">
                  <div className="bg-gray-300 h-64 w-full"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            images.map((image, index) => (
              <div
                key={index}
                className="mb-6 relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.alt}</h3>
                </div>
              </div>
            ))
          )}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;