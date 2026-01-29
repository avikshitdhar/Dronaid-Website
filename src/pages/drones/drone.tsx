import DroneCard from "./droneCard";
import { droneProjects } from "./data/droneData";
import DroneModal from "./droneModal";
import { DroneProject } from "./types";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const Drones = () => {
  const [selectedDrone, setSelectedDrone] = useState<DroneProject | null>(null);
  const dronesRef = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
    script.async = true;

    if (!THREE) {
      console.error("THREE.js is required for Vanta.js");
      return () => {};
    }

    script.onload = () => {
      // @ts-ignore
      if (window.VANTA && window.VANTA.FOG && vantaRef.current) {
        // @ts-ignore
        vantaEffect.current = window.VANTA.FOG({
          el: vantaRef.current,
          THREE: THREE,
          highlightColor: 0x5578f1,
          midtoneColor: 0x888888,
          lowlightColor: 0x000000,
          baseColor: 0x000000,
          blurFactor: 0.5,
          speed: 1.0,
          zoom: 1.0,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative h-screen flex flex-col justify-center items-center px-4">
        <div className="z-20 text-center space-y-4 md:space-y-6">
          <p className="text-sm md:text-base tracking-widest uppercase text-gray-400 font-medium">
            One Flight Saves Lives
          </p>

          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight max-w-4xl mx-auto">
            {typedText.replace(boldText, "")}
            <span className="font-semibold">
              {typedText.includes(boldText) &&
                boldText.slice(
                  0,
                  Math.max(
                    0,
                    typedText.length -
                      (fullText.length - boldText.length)
                  )
                )}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-extralight pt-2 max-w-2xl mx-auto opacity-80">
            Advanced drones engineered for medical drones, surveillance,
            and groundbreaking infrastructure mapping.
          </p>
        </div>
      </div>
      {/* ---------------- END HERO ---------------- */}

      {/* ---------------- DRONE PROJECTS ---------------- */}

      <div ref={dronesRef} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-4xl md:text-5xl font-light tracking-tight text-white mb-14">
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

      {/* ---------------- END PROJECTS ---------------- */}
    </div>
  );
};

export default Drones;
