import React from 'react';

const WriterBlog = () => {
  const blogPosts = [
    {
      date: "Dec 25, 2023",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1169&auto=format&fit=crop",
      title: "GET READY FOR HOLIDAY ON A CHRISTMAS WEEK",
      comments: 2
    },
    {
      date: "Dec 24, 2023",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1374&auto=format&fit=crop",
      title: "STREAM OF THOUGHT IN NEW AGE NARRATIVES",
      comments: 3
    },
    {
      date: "Dec 23, 2023",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1173&auto=format&fit=crop",
      title: "THE BEGINNER'S GUIDE TO FOUNTAIN PEN INKS",
      comments: 1
    },
    {
      date: "Dec 22, 2023",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop",
      title: "BOOK MEETING ROOMS AND VENUES ONLINE",
      comments: 2
    },
    {
      date: "Dec 21, 2023",
      image: "https://images.unsplash.com/photo-1505063366573-38928ae5567e?q=80&w=1170&auto=format&fit=crop",
      title: "WAR NOVELS TO ADD TO YOUR READING LIST",
      comments: 3
    },
    {
      date: "Dec 20, 2023",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop",
      title: "EVERYTHING IS BETTER ON THE BEACH, RIGHT?",
      comments: 2
    }
  ];

  return (
    <>
    <div className="w-1/2 grid place-items-center text-center text-6xl font-bold mt-10 relative">
        <img src="./striplime.png" alt="striplime" className='bg-cover object-cover absolute h-32 w-32 z-10 opacity-60'/>
        <span className='z-30'>The Journal</span></div>
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-6xl md:text-8xl font-serif absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
            MARC DIXIT
          </h1>
          <div className="w-1/4">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1374&auto=format&fit=crop"
              alt="Book preview"
              width={150}
              height={200}
              className="object-cover w-full h-full rounded"
            />
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1470&auto=format&fit=crop"
              alt="Marc Dixit portrait"
              width={400}
              height={400}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <div className='w-1/4'>
          <div className=" bg-cyan-200 p-6 rounded-lg shadow-sm ">
            <h3 className="text-lg font-serif mb-4">Subscribe to our Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Sign up to get all our latest updates & book release news.
            </p>
            <div className='bg-blue-300'>
            <form className="flex absolute right-4 ">
              <input
                type="email"
                placeholder="Add your e-mail"
                className="py-1 px-1 border rounded bg-white text-gray-400 border-gray-400"
              />
              <button type="submit" className="py-1 bg-lime-400 text-white font-bold rounded transition-colors">→</button>
            </form>
            </div>
            
          </div>
          </div>
          
        </div>
      </section>
      
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-center font-serif text-3xl mb-12">New Literature Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <time className="text-sm text-gray-600">{post.date}</time>
                <h3 className="font-serif group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
              
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-[#e8e3dc]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl mb-4">
              Fifteenth Annual<br />
              Short Story & Essay<br />
              Writing Expo
            </h2>
          </div>
          <p className="text-gray-600 mb-4 max-w-md">
              Led us perspecitis unde omnis iste natus error voluptatem accusantium doloremque perspecitis unde iste natus error omnis perspecitis unde omnis iste.
            </p>
          <div className="flex gap-4 flex-wrap justify-center md:w-1/2">
            {[
             'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
             'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png',
              'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b',
              'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
              'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
              'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
            
            ].map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className="w-12 h-12 rounded-full" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WriterBlog;