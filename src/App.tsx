import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import OurPrograms from './components/OurPrograms';
import MakeADifference from './components/MakeADifference';
import VideoBanner from './components/VideoBanner';
import { MarqueeDemo } from './components/MarqueeDemo';
import CallToAction from './components/Calltoaction';
import ContactForm from './components/Contact';
import WriterBlog from './components/WriteBlog';
function App() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <OurPrograms />
        <MakeADifference />
        <CallToAction />
        <Gallery />
        <VideoBanner />
        <VideoSection />
        <div className="max-w-[100vw] w-full overflow-x-hidden relative">
          <MarqueeDemo />
        </div>
        <div className="max-w-[100vw] w-full overflow-x-hidden relative">
        <ContactForm />
        </div>
        <WriterBlog/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
