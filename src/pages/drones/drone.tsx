import DroneCard from "./droneCard";
import { droneProjects } from "./data/droneData";

const Drones = () => (
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

    {/* Drone Projects */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {droneProjects.map((drone, i) => (
        <DroneCard key={i} drone={drone} reverse={i % 2 !== 0} />
      ))}
    </div>
  </div>
);

export default Drones;
