import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import heroImage from '../assets/amasshero.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  AOS.init();
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/40 mt-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 h-full mx-auto flex flex-col justify-center px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 capitalize" data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="1000">
              Root And Horizons
            </h1>
            <h4 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 capitalize" data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="2000">
              Assin Manso In Retrospect
            </h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 capitalize" data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="3000">
              Assin Manso Senior High School
            </h1>
            <p className="text-gray-200 mb-4 md:mb-8 max-w-2xl" data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="3000">
              Community History needs Attention
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
