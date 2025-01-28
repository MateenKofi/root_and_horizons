import ExtractDisplay from "./ExtractDisplay"
const About = () => {

  return (
    <section id='about' className="bg-white py-16">
      <div className="container mx-auto px-4">   
            <span className="text-orange-500 font-medium">About Our Community</span>
           <ExtractDisplay />
      </div>
    </section>
  );
};

export default About; 