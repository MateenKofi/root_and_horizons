import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import heroImage from '../assets/amasshero.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[90dvh] bg-white p-8 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/40 mt-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="h-full max-w-full mx-auto flex flex-col justify-center relative">
        <div className="flex gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 capitalize">
             Root And Horizons
            </h1>
            <h4 className="text-2xl font-bold text-white mb-4 capitalize">
             Assin Manso In Retrospect
            </h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 capitalize">
             Assin Manso Senior High School
            </h1>
            <p className="text-gray-200 mb-8 max-w-2xl">
              Community History needs Attention
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