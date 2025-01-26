

const VideoSection = () => {
  
  const videos = [
    {
      url: 'https://drive.google.com/file/d/15ctoX5nLTJp2ipPnwE8jhLF3qgD_NZDk/preview',
      title: 'Community Celebrations',
      thumbnail: './old.jpeg', 
      description: 'See how our community comes together to share joy and traditions'
    },
    {
      url: 'https://drive.google.com/file/d/17ED1Zfsl5tD8N59ET9ab1RvGuI0Qg9n6/preview',
      title: 'Traditional Dance Performance',
      thumbnail: './hero.jpeg',
      description: 'Experience the vibrant rhythms and movements of traditional African dance'
    },
    
    {
      url: 'https://drive.google.com/file/d/1OoQbfTzTd7su6Vr7HNNHAyWxIObIJwB4/preview', 
      title: 'Cultural Festival Highlights',
      thumbnail: './smile.jpeg',
      description: 'Join us in celebrating African culture through music, dance and art'
    },
   
  ];

  return (
    <section id="videos" className="py-20 ">
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
              <p className="text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
