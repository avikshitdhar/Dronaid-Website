import { Trophy, Calendar, MapPin, Image } from "lucide-react";
import { Competition } from "./types";
import { useNavigate } from "react-router-dom";


interface CompetitionCardProps {
  competition: Competition;
}

const CompetitionCard = ({ competition }: CompetitionCardProps) => {
  const images = competition.media?.images ?? [];
  const navigate = useNavigate();


  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden ">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {competition.name}
        </h2>

        <div className="flex flex-wrap gap-4 text-gray-300">
          <div className="flex items-center">
            <Calendar size={20} className="mr-2 text-blue-600" />
            <span>{competition.date}</span>
          </div>

          <div className="flex items-center">
            <MapPin size={20} className="mr-2 text-blue-600" />
            <span>{competition.location}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {competition.description}
        </p>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Trophy className="mr-2 text-yellow-500" size={24} />
            Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-3">
            {competition.achievements.map((achievement, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg p-4 border border-gray-700"
              >
                <p className="text-gray-200 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Media Gallery
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.length > 0 ? (
              images.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`${competition.name} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))
            ) : (
              Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700"
                >
                  <Image size={40} className="text-gray-600" />
                </div>
              ))
            )}
          </div>
        </div>
        <button
          onClick={() => navigate("/competitions")}
className="mx-8 mt-6 mb-2 inline-flex items-center gap-2 rounded-lg 
           border border-gray-700 bg-gray-800/60 
           px-4 py-2 text-sm text-gray-300 
           hover:border-blue-500 hover:bg-gray-800 hover:text-white 
           transition">

          ← Back to Competitions
        </button>

      </div>
    </div>
  );
};

export default CompetitionCard;
