import React from 'react';
import { Link } from 'react-scroll';

const OurPrograms = () => {
  return (
    <section className="relative bg-white py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('./transBg.png')] opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="md:w-1/2 space-y-6">
            <span className="text-orange-500 uppercase tracking-wider font-medium">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Changing Lives with Knowledge
            </h2>
            <p className="text-gray-600">
              Our programs help give access to strong education opportunities to 
              changing lives. Today, we can make a difference in the lives of people living 
              with limited resources. Learn more about our educational initiatives and 
              how you can contribute to this meaningful cause.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors">
                Learn More
              </button>
              <Link to="videos" smooth={true} duration={500} className="flex items-center gap-2 border-2 border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full transition-colors cursor-pointer">
             
                Watch Video
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ▶
                </span>
              </Link>
            </div>
          </div>
          {/* Left side with overlapping images */}
          <div className="relative w-full md:w-1/2">
            {/* Main large circle */}
            <div className="relative w-[400px] aspect-square mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="./smile.jpeg"
                  alt="Program Impact" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top right circle */}
              <div className="absolute -right-4 top-12 w-32 h-32">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src="./younglady.jpeg"
                    alt="Children smiling" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom left circle */}
              <div className="absolute left-0 bottom-20 w-28 h-28">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src="./old.jpeg"
                    alt="Education program" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute bottom-32 right-10 w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="absolute top-10 right-20 w-2 h-2 bg-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms; 