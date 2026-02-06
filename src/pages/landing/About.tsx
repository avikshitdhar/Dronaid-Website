/**
 * About Section
 * Overview of the drone team's mission and values
 */
const About = () => {
  const features = [
    {
      title: 'Who Are We?',
      description: 'A diverse group of engineers, designers, and enthusiasts working together to push boundaries.',
    },
    {
      title: 'Vision',
      description: 'Recognized in national and international competitions for innovation and performance.',
    },
    {
      title: 'Mission',
      description: 'Leveraging the latest in drone technology, AI, and autonomous systems.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Us
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team dedicated to advancing drone technology through innovation,
            research, and competition. Our mission is to develop cutting-edge aerial systems
            that solve real-world problems.
          </p> */}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors border border-gray-700"
            >
              {/* <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <feature.icon size={32} className="text-white" />
              </div> */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
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
