
const About = () => {
  const stats = [
    { value: '150K', label: 'Lives Changed' },
    { value: '2.5M', label: 'Raised Fund' },
    { value: '50K', label: 'Helped' },
    { value: '15', label: 'Years of Work' },
  ];

  return (
    <section id='about' className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Flower/Leaf shaped image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
                <img 
                  src="./imagemix.png"
                  alt="People helping community" 
                  className="w-5/6 object-cover"
                />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 space-y-6">
            <span className="text-orange-500 font-medium">About Our Community</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Together We Can Make A Difference
            </h2>
            <p className="text-gray-600">
              We are dedicated to creating positive change in communities worldwide. Through our network 
              of volunteers and donors, we've helped transform countless lives over the past 15 years. 
              Our mission is to provide support, resources, and hope to those in need, believing that 
              every small action can lead to meaningful change.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 