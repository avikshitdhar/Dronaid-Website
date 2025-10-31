import { Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-white mb-4">Our Competitions</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Celebrating our achievements and experiences in drone competitions worldwide
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
