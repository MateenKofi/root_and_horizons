import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[90dvh] bg-white p-8 bg-[url('./hero.jpeg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/50"
    >
      <div className="h-full max-w-full mx-auto flex flex-col justify-center relative">
        <div className="flex gap-8">
          <div className="w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
             Root And Horizons
            </h1>
            <h4 className="text-2xl font-bold text-white mb-4">
             Assin Manso In Retrospect
            </h4>
            <p className="text-gray-200 mb-8 max-w-2xl">
              Every five seconds one child dies in Africa due to malnutrition and medical diseases, will you help?
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;