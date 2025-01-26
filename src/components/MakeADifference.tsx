
const MakeADifference = () => {
  const cards = [
    {
      icon: "🎯", // You can replace these with actual icon components
      title: "Easy Access",
      description: "Simple and accessible ways to get involved and make a positive impact in your community."
    },
    {
      icon: "🏘️",
      title: "Locally For Locals",
      description: "Supporting local initiatives that directly benefit your neighborhood and surrounding areas."
    },
    {
      icon: "📊",
      title: "Real Impact",
      description: "Measurable outcomes and transparent reporting of how your support makes a difference."
    },
    {
      icon: "💝",
      title: "Safety Net",
      description: "Creating a reliable support system for those in need within our community."
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
            Make a Difference
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple but effective steps to provide care and support to those in need across 
            local communities and beyond.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow
                        border border-gray-100 text-center group"
            >
              {/* Icon container */}
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center 
                            mx-auto mb-6 group-hover:bg-orange-100 transition-colors">
                <span className="text-2xl">{card.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeADifference; 