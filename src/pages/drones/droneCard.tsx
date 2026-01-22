import { motion } from "framer-motion";
import { DroneProject } from "./types";

interface DroneCardProps {
  drone: DroneProject;
  onClick: () => void;
}

const DroneCard = ({ drone, onClick }: DroneCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="cursor-pointer group"
    >
      {/* OUTER CARD */}
      <div className="bg-black border border-white rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-blue-600 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={drone.image}
            alt={drone.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* NAME */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-center text-white transition-colors group-hover:text-blue-600">
            {drone.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default DroneCard;
