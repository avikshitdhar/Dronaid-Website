import { Building2 } from 'lucide-react';

/**
 * Sponsors Section
 * Displays team sponsors and partners
 */
const Sponsors = () => {
  // Placeholder sponsor data
  const sponsors = [
    { name: 'TechCorp', level: 'Platinum' },
    { name: 'AeroSystems', level: 'Gold' },
    { name: 'DroneHub', level: 'Gold' },
    { name: 'Innovation Labs', level: 'Silver' },
    { name: 'FutureTech', level: 'Silver' },
    { name: 'SkyView', level: 'Bronze' },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are grateful for the support of our partners who make our innovations possible.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-750 transition-colors border border-gray-700 hover:border-blue-600"
            >
              <Building2 size={48} className="text-blue-500 mb-3" />
              <h4 className="text-white font-semibold text-center mb-1">
                {sponsor.name}
              </h4>
              <span className="text-xs text-gray-400">{sponsor.level}</span>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Become a Sponsor
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl">
              Join us in advancing drone technology and supporting the next generation of engineers.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
