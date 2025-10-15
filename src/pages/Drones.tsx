import { Plane } from 'lucide-react';

/**
 * Drones Page
 * Displays drone projects with alternating layouts
 * Includes team gallery at the bottom
 */

interface DroneProject {
  name: string;
  description: string;
  specs: string[];
}

const Drones = () => {
  const droneProjects: DroneProject[] = [
    {
      name: 'Falcon X1',
      description: 'Our flagship racing drone designed for high-speed competitions. Features advanced stabilization systems and a lightweight carbon fiber frame for maximum agility and precision control.',
      specs: ['Top Speed: 120 mph', 'Flight Time: 8 minutes', 'Weight: 450g'],
    },
    {
      name: 'Phoenix Surveillance',
      description: 'Long-endurance surveillance drone with advanced camera systems. Built for environmental monitoring and search operations with extended battery life and autonomous navigation.',
      specs: ['Flight Time: 45 minutes', 'Camera: 4K 60fps', 'Range: 5km'],
    },
    {
      name: 'Eagle Scout',
      description: 'Autonomous mapping drone equipped with LiDAR and photogrammetry capabilities. Ideal for agricultural analysis and topographic surveying with centimeter-level accuracy.',
      specs: ['LiDAR Accuracy: 2cm', 'Coverage: 200 acres/hour', 'Autonomous: Yes'],
    },
    {
      name: 'Sparrow Micro',
      description: 'Ultra-compact indoor navigation drone. Perfect for confined space inspection and educational demonstrations. Features obstacle avoidance and precision hover capabilities.',
      specs: ['Weight: 89g', 'Indoor Flight: Yes', 'Obstacle Avoidance: Active'],
    },
  ];

  const teamMembers = [
    { name: 'Alex Johnson', role: 'Lead Engineer' },
    { name: 'Sarah Chen', role: 'Flight Systems' },
    { name: 'Marcus Rodriguez', role: 'Electronics' },
    { name: 'Emily Park', role: 'Software Dev' },
    { name: 'David Kumar', role: 'Testing Lead' },
    { name: 'Lisa Thompson', role: 'Design Lead' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Drones</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge aerial vehicles designed and built by our team for various applications
          </p>
        </div>
      </div>

      {/* Drone Projects - Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {droneProjects.map((drone, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}
          >
            {/* Drone Image */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-800 rounded-2xl h-80 flex items-center justify-center border border-gray-700">
                <Plane size={120} className="text-blue-500" />
              </div>
            </div>

            {/* Drone Description */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">{drone.name}</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {drone.description}
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Specifications:</h3>
                {drone.specs.map((spec, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Gallery */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Drone Development Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-750 transition-colors border border-gray-700"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-white font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drones;
