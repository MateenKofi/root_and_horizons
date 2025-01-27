import { Book, FileText, FileSignature, Globe } from "lucide-react"
import Image from "next/image"
import ExtractDisplay from "./ExtractDisplay"

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
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col items-center justify-center text-center">
            <img src="/striplime.png" alt="striplime" width={128} height={128} className="absolute opacity-60" />
            <h1 className="text-4xl md:text-6xl font-bold z-10 mb-4">BIBLIOGRAPHY</h1>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-700">ASSIN MANSO</h2>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1470&auto=format&fit=crop"
              alt="Marc Dixit portrait"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1374&auto=format&fit=crop"
              alt="Book preview"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full mb-6"
            />
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">Sign up to get all our latest updates & book release news.</p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Add your e-mail"
                  className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center font-serif text-3xl mb-8">Secondary Sources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondarySources.map((source, index) => (
              <a href={source.link} key={index} target="_blank" rel="noopener noreferrer">
                <div className="bg-white rounded-lg shadow p-6 h-full hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-2 mb-4 ">
                    {source.icon}
                    <h3 className="text-lg font-semibold">{source.type}</h3>
                  </div>
                  <p className="text-sm text-blue-600">{source.details}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="retrospect">
          <ExtractDisplay />
        </section>
      </main>
    </div>
  )
}

export default WriterBlog

