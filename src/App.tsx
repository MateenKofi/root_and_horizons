import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurPrograms from './components/OurPrograms';
import MakeADifference from './components/MakeADifference';
import VideoBanner from './components/VideoBanner';
import { MarqueeDemo } from './components/MarqueeDemo';
import CallToAction from './components/Calltoaction';
function App() {
  return (
    <div className="bg-white w-full overflow-x-hidden relative">
      <Navbar />
      <main className="overflow-x-hidden relative">
        <Hero />
        <About />
        <OurPrograms />
        <MakeADifference />
        <Gallery />
        <VideoBanner />
        <VideoSection />
        <div className="max-w-[100vw] w-full overflow-x-hidden relative">
          <MarqueeDemo />
        </div>
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
