import AOS from 'aos';
import 'aos/dist/aos.css'; 

const OurPrograms = () => {
  AOS.init();
  return (
    <section className="relative bg-white py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('./transBg.png')] opacity-5"></div>

      <div className="container mx-auto px-4 space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-african-brown uppercase tracking-wider font-bold text-xl" data-aos="fade-left" data-aos-delay="50"
    data-aos-duration="1000">
              Slave River
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-aos="fade-left" data-aos-delay="50"
    data-aos-duration="1050">
              Empowering the Slave River Community
            </h2>
            <p className="text-gray-600" data-aos="fade-left" data-aos-delay="50"
    data-aos-duration="1500">
              Our programs at Slave River aim to provide quality education and resources to the community. We strive to empower individuals through knowledge and skills, fostering growth and development. Discover more about our initiatives and how you can support our mission to create a brighter future for everyone at Slave River.
            </p>

            
          </div>
          {/* Left side with overlapping images */}
          <img src="/slave river site.jpg" alt="slave river" className='w-full md:w-1/2'data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="1000"/>
     
        </div>

        <div className="block lg:hidden">
          <span className="text-african-brown uppercase tracking-wider font-bold text-xl">
            Map
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover the Slave River Map
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 spacey-4">
            {/* Left side with overlapping images */}
            <img src="/map.jpg" alt="slave river" className='w-full md:w-1/2'/>
          {/* Left side content */}
          <div className="md:w-1/2 space-y-6">
          <div className="hidden lg:block">
            <span className="text-orange-500 uppercase tracking-wider font-medium text-xl">
              Map
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover the Slave River Map
            </h2>
          </div>
            <p className="text-gray-600">
              Explore the detailed map of Assin Manso and it's envrionments to understand the geography and key locations within the community. This map provides valuable insights into the area, helping you navigate and discover important landmarks. Learn more about the Slave River region and how it shapes the lives of its residents.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
