

const VideoSection = () => {
  
  const videos = [
    {
      url: 'https://drive.google.com/file/d/15ctoX5nLTJp2ipPnwE8jhLF3qgD_NZDk/preview',
      title: 'First Conversation With Nana Aboagye of Assin Manso',
       
    },
    {
      url: 'https://drive.google.com/file/d/17ED1Zfsl5tD8N59ET9ab1RvGuI0Qg9n6/preview',
      title: 'The Role Of Manso In The Slave Trade',
     
    },
    
    {
      url: 'https://drive.google.com/file/d/1OoQbfTzTd7su6Vr7HNNHAyWxIObIJwB4/preview', 
      title: 'Cultural Festival Highlights',
     
    },
    {
      url: 'https://drive.google.com/file/d/1PWTkkH2LrGLK7UWxZexxBmx3mQFfAqRH/preview', 
      title: 'Economic Activities In Assin Manso',
     
    },
    {
      url: 'https://drive.google.com/file/d/14joPD4mzCPa3CvoRDgJh9AaWfSCTzLaU/preview', 
      title: 'Economic Activities In Assin Manso',
    },
    {
      url: 'https://drive.google.com/file/d/1tzf0ucFvApQmzT3GZaB5nbIOTpCeCpXv/preview', 
      title: 'Economic Activities In Assin Manso',
    
    },
   
  ];

  return (
    <section id="videos" className="py-20 ">
      <header className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col items-center justify-center text-center">
            <img
              src="/splashblue.png"
              alt="striplime"
              width={200}
              height={200}
              className="absolute opacity-60"
            />
            <h1 className="text-4xl md:text-6xl font-bold z-10 mb-4">Intervies</h1>
           
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-african-brown">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
