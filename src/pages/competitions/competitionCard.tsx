import { Trophy, Calendar, MapPin, Image, Video } from "lucide-react";
import { Competition } from "./types";

interface CompetitionCardProps {
  competition: Competition;
}

const CompetitionCard = ({ competition }: CompetitionCardProps) => (
  <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-600 transition-colors">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8">
      <h2 className="text-3xl font-bold text-white mb-4">{competition.name}</h2>
      <div className="flex flex-wrap gap-4 text-gray-300">
        <div className="flex items-center">
          <Calendar size={20} className="mr-2 text-blue-400" />
          <span>{competition.date}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={20} className="mr-2 text-blue-400" />
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
      <div className="mb-6">
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
        <h3 className="text-xl font-semibold text-white mb-4">Media Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: Math.min(competition.mediaCount.images, 3) }).map(
            (_, i) => (
              <div
                key={`img-${i}`}
                className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
              >
                <Image size={48} className="text-gray-600" />
              </div>
            )
          )}
          {competition.mediaCount.videos > 0 && (
            <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer">
              <Video size={48} className="text-gray-600" />
            </div>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-3">
          {competition.mediaCount.images} photos • {competition.mediaCount.videos} videos
        </p>
      </div>
    </div>
  </div>
);

export default CompetitionCard;
