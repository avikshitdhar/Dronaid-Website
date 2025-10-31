import { Plane } from "lucide-react";
import { DroneProject } from "./types";

interface DroneCardProps {
  drone: DroneProject;
  reverse?: boolean;
}

const DroneCard = ({ drone, reverse = false }: DroneCardProps) => (
  <div
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } gap-8 items-center`}
  >
    {/* Drone Image */}
    <div className="w-full md:w-1/2">
      <div className="bg-gray-800 rounded-2xl h-80 flex items-center justify-center border border-gray-700 overflow-hidden">
        {drone.image ? (
          <img
            src={drone.image}
            alt={drone.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Plane size={120} className="text-blue-500" />
        )}
      </div>
    </div>

    {/* Drone Description */}
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl font-bold text-white mb-4">{drone.name}</h2>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        {drone.description}
      </p>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">
          Specifications:
        </h3>
        {drone.specs.map((spec, i) => (
          <div key={i} className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
            {spec}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DroneCard;
