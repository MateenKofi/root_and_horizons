import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import * as images from "../assets/images";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const imageList = Object.keys(images).map((key) => ({
    src: (images as { [key: string]: string })[key],
    alt: key.replace(/pic(\d+)/, "Image $1"),
  }));

  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageList.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false); 
        });
      });
      await Promise.all(imagePromises);
      setLoading(false);
    };
    loadImages();
  }, []);

  return (
    <section id="gallery" className="py-20">
      <header className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col items-center justify-center text-center">
            <img
              src="/striplime.png"
              alt="striplime"
              width={128}
              height={128}
              className="absolute opacity-60"
            />
            <h1 className="text-4xl md:text-6xl font-bold z-10 mb-4">GALLERY</h1>
          </div>
        </div>
      </header>
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
            : imageList.map((image, index) => (
                <div
                  key={index}
                  className="mb-6 relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;
