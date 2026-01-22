import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { DroneProject } from "./types";

interface DroneModalProps {
  drone: DroneProject | null;
  onClose: () => void;
}

const DroneModal = ({ drone, onClose }: DroneModalProps) => {
  if (!drone) return null;

  // ✅ ESC KEY TO CLOSE
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-black max-w-2xl w-full mx-4 rounded-2xl p-6 border border-white"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full text-white 
                       hover:text-blue-600 hover:bg-white/10 
                       focus:outline-none focus:ring-2 focus:ring-blue-600
                       transition"
          >
            <X size={22} />
          </button>

          <img
            src={drone.image}
            alt={drone.name}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          <h2 className="text-3xl font-bold text-white mb-4">
            {drone.name}
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {drone.description}
          </p>

          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Specifications
          </h3>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {drone.specs.map((spec, i) => {
    const [label, value] = spec.split(":").map(s => s.trim());

    return (
      <div
        key={i}
        className="border border-gray-800 rounded-lg p-4 bg-black"
      >
        <div className="text-white font-semibold text-lg">
          {label}
        </div>
        <div className="text-gray-400 text-sm mt-1">
          {value}
        </div>
      </div>
    );
  })}
</div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DroneModal;
