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

  // ESC TO CLOSE
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
        {/* CARD */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-80 sm:w-96 bg-black rounded-2xl p-4"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-2 right-2 p-1 rounded-full text-white
                       hover:text-blue-600 hover:bg-white/10 transition"
          >
            <X size={18} />
          </button>

          {/* NAME BAR */}
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold text-white">
              {drone.name}
            </h2>
          </div>

          {/* IMAGE FRAME */}
          <div className="mb-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={drone.image}
                alt={drone.name}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* DESCRIPTION (POKÉDEX STYLE) */}
          <div className="mb-4 px-2">
            <p className="text-gray-300 text-sm leading-relaxed">
              {drone.description}
            </p>
          </div>

          {/* SPECS (ATTACK / INFO BOX STYLE) */}
          <div className="space-y-3">
            {drone.specs.map((spec, i) => {
              const [label, value] = spec.split(":").map(s => s.trim());

              return (
                <div
                  key={i}
                  className="bg-black/60 rounded-lg px-3 py-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-sm">
                      {label}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {value}
                    </span>
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
