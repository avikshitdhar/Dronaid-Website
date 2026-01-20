import { Plane } from "lucide-react";
import { DroneProject } from "./types";
import { motion } from "framer-motion"; // ✅ for subtle animations

interface DroneCardProps {
  drone: DroneProject;
  reverse?: boolean;
}

const DroneCard = ({ drone, reverse = false }: DroneCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } gap-8 items-center transition-all duration-100 hover:scale-[1.01]`}
  >
    {/* Drone Image */}
    <motion.div
      whileHover={{ scale: 1.001 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="w-full md:w-1/2"
    >
      <div className="bg-gray-800 rounded-2xl h-80 flex items-center justify-center border border-gray-700 overflow-hidden hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300">
        {drone.image ? (
          <img
            src={drone.image}
            alt={drone.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <Plane size={120} className="text-blue-500" />
        )}
      </div>
    </motion.div>

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
          <div
            key={i}
            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 transition-transform duration-300 group-hover:scale-125" />
            {spec}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default DroneCard;
