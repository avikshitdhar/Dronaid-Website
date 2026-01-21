import DroneCard from "./droneCard";
import { droneProjects } from "./data/droneData";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const base = import.meta.env.BASE_URL;

const Drones = () => {
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

  const scrollToDrones = () => {
    setTimeout(() => {
      dronesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
            Autonomous Drones For Medical Deliveries
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

        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-30">
          <button
            onClick={scrollToDrones}
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 transition duration-300"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-full group-hover:bg-opacity-0">
              Explore Our Fleet
            </span>
          </button>
        </div>
      </div>
      {/* ---------------- END HERO ---------------- */}

      {/* ---------------- DRONE PROJECTS ---------------- */}
      <div
        ref={dronesRef}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20"
      >
        {droneProjects.map((drone, i) => (
          <DroneCard key={i} drone={drone} reverse={i % 2 !== 0} />
        ))}
      </div>
      {/* ---------------- END PROJECTS ---------------- */}
    </div>
  );
};

export default Drones;
