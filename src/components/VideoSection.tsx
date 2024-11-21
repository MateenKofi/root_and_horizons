import React, { useState } from 'react';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  
  const videos = [
    {
      url: 'https://youtu.be/wRzyOCFA77I?si=o62H36F_SFm0IIkO',
      title: 'Traditional Dance Performance',
      thumbnail: './hero.jpeg',
      description: 'Experience the vibrant rhythms and movements of traditional African dance'
    },
    {
      url: 'https://youtu.be/5GG-VUvruzE?si=ot7XIPhxEYbQAypF', 
      title: 'Cultural Festival Highlights',
      thumbnail: './smile.jpeg',
      description: 'Join us in celebrating African culture through music, dance and art'
    },
    {
      url: 'https://youtu.be/fqabW3WRUbw?si=qTT0lDO0wt5eKDID',
      title: 'Community Celebrations',
      thumbnail: './old.jpeg', 
      description: 'See how our community comes together to share joy and traditions'
    },
  ];

  return (
    <section id="videos" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedVideo !== null && (
          <div className="">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-[80dvh] rounded-lg"
                src={`${videos[selectedVideo].url.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}?autoplay=1&mute=1`}
                title={videos[selectedVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
              onClick={() => setSelectedVideo(index)}
            >
              <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
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