import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import MakeADifference from "./components/MakeADifference";
import VideoBanner from "./components/VideoBanner";
import CallToAction from "./components/Calltoaction";
import WriterBlog from "./components/WriteBlog";
import OurPrograms from "./components/OurPrograms";

function App() {
  return (
    <div className="bg-white w-full">
      <Navbar />
        <Hero />
        <About />
        <OurPrograms />
        <MakeADifference />
        <CallToAction />
        <Gallery />
        <VideoBanner />
        <VideoSection />
        <WriterBlog />
      <Footer />
    </div>
  );
}

export default App;