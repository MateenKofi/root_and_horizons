import { Book, FileText, FileSignature, Globe } from "lucide-react";
import ExtractDisplay from "./ExtractDisplay";

const WriterBlog = () => {
  const secondarySources = [
    {
      type: "Book",
      icon: <Book className="w-6 h-6 text-blue-500" />,
      link: "https://discovered.ed.ac.uk/discovery/fulldisplay?vid=44UOE_INST:44UOE_VU2&search_scope=UoE&tab=Everything&docid=alma992933323502466&lang=en&context=L&adaptor=Local%20Search%20Engine&query=sub,exact,Nkrumah,%20Kwame,%201909-1972",
      details:
        "Boahen, A.A, Ghana: Evolution and Change in the Nineteenth and Twentieth Centuries, (Accra Sankofa Educational Publishers Ltd, 2000).",
    },
    {
      type: "Book",
      icon: <Book className="w-6 h-6 text-blue-500" />,
      link: "https://www.google.com/search?q=Gocking+Roger.+S%2C+The+History+of+Ghana%2C+(Westport%2C+Connecticut%3B+Greenwood+Press%2C+2005).&oq=Gocking+Roger.+S%2C+The+History+of+Ghana%2C+(Westport%2C+Connecticut%3B+Greenwood+Press%2C+2005).&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEIMjQzMWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8",
      details: "Gocking Roger. S, The History of Ghana, (Westport, Connecticut; Greenwood Press, 2005).",
    },
    {
      type: "Book",
      icon: <Book className="w-6 h-6 text-blue-500" />,
      link: "https://www.researchgate.net/publication/356493685",
      details:
        "Nyarko Abbam John, Central Region: Origins & Culture, (Lulu Publishing Company, 2021). https://www.researchgate.net/publication/356493685",
    },
    {
      type: "Article",
      icon: <FileText className="w-6 h-6 text-green-500" />,
      link: "https://doi.org/10.1080/10548408.2018.1527743",
      details:
        'Adam Issahaku and Amuquandoh Francis Eric, "Ethnic-Based Motives and Experiences at Former Slave Sites," Journal of Travel & Tourism Marketing, Vol. 36, No. 4 (2019): 497-510. https://doi.org/10.1080/10548408.2018.1527743',
    },
    {
      type: "Master's Thesis",
      icon: <FileSignature className="w-6 h-6 text-purple-500" />,
      link: "https://www.semanticscholar.org/paper/AKAN-INDIGENOUS-RELIGIO-CULTURAL-BELIEFS-AND-%3A-THE-Boamah/800f63a5decdcc342c394c8420a5c9d0d3907e77",
      details:
        "Asante Boamah Daniel, Akan Indigenous Religio-Cultural Beliefs and Environmental Preservation: The Role of Taboos, Queen's University, 2015.",
    },
    {
      type: "Web Page",
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      link: "https://www.assinapimanim.com",
      details: "Apimanim Traditional Area, Retrieved from https://www.assinapimanim.com on 9th January 2025.",
    },
  ];

  const primarySources = [
    { title: "Interview with Nana Anokye Kotoko II. Assin Kyinso, 22nd November 2024" },
    { title: "Interview with Mr. Kweku Addo. Assin Manso, 22nd November 2024" },
    { title: "Interview with Nana Aboagye. Assin Manso, 22nd November 2024" },
    { title: "Interview with Robert Asiedu. Assin Manso, 23rd December 2024" },
    { title: "Interview with Divine Nawoe Azuma. Assin Manso, 6th January 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
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
            <h1 className="text-4xl md:text-6xl font-bold z-10 mb-4">BIBLIOGRAPHY</h1>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-700">ASSIN MANSO</h2>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Primary Sources Section */}
        <section className="mb-16">
          <h2 className="text-center font-serif text-3xl mb-8">Interviews</h2>
          <div>
            {primarySources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 mb-4">
                <h3 className="text-lg font-semibold">{source.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Sources Section */}
        <section className="mb-16">
          <h2 className="text-center font-serif text-3xl mb-8">Secondary Sources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondarySources.map((source, index) => (
              <a
                href={source.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white rounded-lg shadow p-6 h-full hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-2 mb-4">
                    {source.icon}
                    <h3 className="text-lg font-semibold">{source.type}</h3>
                  </div>
                  <p className="text-sm text-blue-600">{source.details}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Retrospect Section */}
        <section id="retrospect">
          <ExtractDisplay />
        </section>
      </main>
    </div>
  );
};

export default WriterBlog;
