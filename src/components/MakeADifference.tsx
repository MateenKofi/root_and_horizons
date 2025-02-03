import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MakeADifference = () => {
  AOS.init();
  const quotes = [
    {
      quote: "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "The moment the slave resolves to no longer be a slave, his chains fall.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "I am not a man, and a brother?",
      author: "Josiah Wedgwood"
    },
    {
      quote: "Whenever I hear anyone arguing for slavery, I feel a strong impulse to see it tried on him personally.",
      author: "Abraham Lincoln"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Optional background dots/pattern */}
      <div className="absolute inset-0 bg-[url('/transBg.png')] opacity-5"></div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quotes about Slavery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reflect on these powerful quotes about the history and impact of slavery.
          </p>
        </div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quotes.map((quote, index) => (
            <div 
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration={`${1000 + index * 500}`}
              key={index}
              className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow
                        border border-gray-100 text-center group"
            >
              {/* Quote container */}
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center 
                            mx-auto mb-6 group-hover:bg-orange-100 transition-colors">
                <span className="text-2xl">“</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {quote.quote}
              </h3>
              <p className="text-gray-600 text-sm">
                - {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeADifference;
