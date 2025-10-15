import { Target, Rocket, Globe } from 'lucide-react';

/**
 * Ambitions Section
 * Showcases team goals and future aspirations
 */
const Ambitions = () => {
  const ambitions = [
    {
      icon: Target,
      title: 'Competition Excellence',
      description: 'Compete and win in prestigious national and international drone competitions.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Rocket,
      title: 'Innovation Leadership',
      description: 'Pioneer new drone technologies and autonomous flight systems.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Develop solutions for environmental monitoring, disaster relief, and agriculture.',
      color: 'from-green-600 to-emerald-600',
    },
  ];

  return (
    <section id="ambitions" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Ambitions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving towards a future where drones revolutionize industries and improve lives worldwide.
          </p>
        </div>

        {/* Ambitions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {ambitions.map((ambition, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-r ${ambition.color} rounded-lg flex items-center justify-center mb-6`}>
                  <ambition.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {ambition.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {ambition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambitions;
