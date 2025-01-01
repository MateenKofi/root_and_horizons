import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
} from "../assets/images";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    {
      src: pic1,
      alt: "Traditional Dance Performance",
    },
    {
      src: pic2,
      alt: "Traditional Dance Performance",
    },
    {
      src: pic10,
      alt: "African Cultural Festival",
    },
    {
      src: pic18,
      alt: "Traditional African Attire",
    },
    {
      src: pic19,
      alt: "Traditional African Attire",
    },
    {
      src: pic11,
      alt: "African Art and Craft",
    },
    {
      src: pic8,
      alt: "Community Celebration",
    },
    {
      src: pic9,
      alt: "Community Celebration",
    },
    {
      src: pic7,
      alt: "Traditional Music Performance",
    },
    {
      src: pic6,
      alt: "Traditional Music Performance",
    },
    {
      src: pic5,
      alt: "Traditional Music Performance",
    },
    {
      src: pic4,
      alt: "Traditional Music Performance",
    },
    {
      src: pic3,
      alt: "Traditional Music Performance",
    },
    {
      src: pic12,
      alt: "Traditional Music Performance",
    },
    {
      src: pic13,
      alt: "Traditional Music Performance",
    },
    {
      src: pic14,
      alt: "Traditional Music Performance",
    },
    {
      src: pic15,
      alt: "Traditional Music Performance",
    },
    {
      src: pic16,
      alt: "Traditional Music Performance",
    },
    {
      src: pic17,
      alt: "Traditional Music Performance",
    },
  ];

  const breakpointColumns = {
    default: 4,
    1100: 4,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map((image) => {
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
          {loading
            ? // Skeleton loader items
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
            : images.map((image, index) => (
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
              ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;
