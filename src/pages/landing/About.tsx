import { useEffect, useRef } from "react";
import { useScroll } from "./scrollContext";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { register } = useScroll();

  useEffect(() => {
    register("about", sectionRef.current);
  }, [register]);

  const features = [
    {
      title: "Who Are We?",
      description:
        "We are the official drone team of Manipal Institute of Technology, Manipal. As a student project team we are working towards building an autonomous UAV system for the purpose of delivering medical and emergency aid and supplies. Every minute a medical delivery is delayed due to traffic, and life is at risk. We aren't just building drones, we are building a bypass for the healthcare system.",
    },
    {
      title: "Vision",
      description:
        "Project DronAid envisions a future where no life is lost due to delayed medical assistance. We aim to transform emergency healthcare by using autonomous, AI-powered drones to deliver critical medical supplies within minutes, even in remote and disaster-affected areas. Our vision is to make rapid medical aid a guaranteed service for everyone, everywhere.",
    },
    {
      title: "Mission",
      description:
        "We are diligently working on creating efficient autonomous payload delivery systems primarily focused on medicines and healthcare essentials. Concurrently, we are developing an accompanying app that will serve as the interface for our comprehensive medicinal delivery services.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light">
            About Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-900 bg-black
                         p-6 md:p-8
                         transition-all duration-300
                         hover:border-gray-700"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-600 uppercase tracking-widest">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
