import DroneCard from "./droneCard";
import { droneProjects } from "./data/droneData";
import DroneModal from "./droneModal";
import { DroneProject } from "./types";

import { useRef, useEffect, useState } from "react";

const Drones = () => {
  const [selectedDrone, setSelectedDrone] = useState<DroneProject | null>(null);
  const dronesRef = useRef<HTMLDivElement | null>(null);

  /* ------------------ Typing Animation Logic ------------------ */
  const fullText = "Pioneering the Future of Aerial Solutions";
  const boldText = "Aerial Solutions";
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 60;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);
  /* ----------------------------------------------------------- */

  return (
    <div className="relative overflow-hidden text-white bg-animated">

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center px-4">
        <div className="text-center space-y-4 md:space-y-6">
          <p className="text-sm md:text-base tracking-widest uppercase text-gray-200 font-medium">
            One Flight Saves Lives
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight max-w-4xl mx-auto">
            {typedText.replace(boldText, "")}
            <span className="font-semibold">
              {typedText.includes(boldText) &&
                boldText.slice(
                  0,
                  Math.max(
                    0,
                    typedText.length - (fullText.length - boldText.length)
                  )
                )}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl font-extralight pt-2 max-w-2xl mx-auto opacity-90">
            Advanced drones engineered for medical delivery, surveillance,
            and groundbreaking infrastructure mapping.
          </p>
        </div>
      </div>
      {/* ---------------- END HERO ---------------- */}

      {/* ---------------- DRONE PROJECTS ---------------- */}
      <div
        ref={dronesRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <h2 className="text-center text-4xl md:text-5xl font-light tracking-tight mb-14">
          Our <span className="font-semibold">Fleet</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {droneProjects.map((drone, i) => (
            <DroneCard
              key={i}
              drone={drone}
              onClick={() => setSelectedDrone(drone)}
            />
          ))}
        </div>
      </div>

      <DroneModal
        drone={selectedDrone}
        onClose={() => setSelectedDrone(null)}
      />

      {/* Background animation styles */}
      <style>
        {`
          .bg-animated {
            background: linear-gradient(
              -45deg,
              #0f172a,
              #1e3a8a,
              #0ea5e9,
              #1e40af
            );
            background-size: 400% 400%;
            animation: gradientShift 12s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Drones;
