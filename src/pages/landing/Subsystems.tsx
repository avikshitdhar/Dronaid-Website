import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

const Subsystems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const subsystems = [
    {
      name: "Electronics",
      description:
        "Focuses on airframe design, material selection, and CFD analysis to optimize lift-to-drag ratios.",
      image: `${base}drones/Icarus.jpeg`,
    },
    {
      name: "Design Fabrication and Manufacturing",
      description:
        "Responsible for motor efficiency, battery management, and electronic speed controller (ESC) calibration.",
      image: `${base}drones/Icarus.jpeg`,
    },
    {
      name: "AI and Automation",
      description:
        "Developing SLAM algorithms, computer vision, and obstacle avoidance for GPS-denied environments.",
      image: `${base}drones/Icarus.jpeg`,
    },
    {
      name: "Software",
      description:
        "Implementing PID tuning and flight controller firmware optimization for maximum stability.",
      image: `${base}drones/Icarus.jpeg`,
    },
    {
      name: "Management",
      description:
        "Implementing PID tuning and flight controller firmware optimization for maximum stability.",
      image: `${base}drones/Icarus.jpeg`,
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === subsystems.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? subsystems.length - 1 : prev - 1
    );

  const current = subsystems[currentIndex];

  return (
    <section id="subsystems" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
          Our Subsystems
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20
                       p-3 rounded-full border border-gray-700
                       hover:bg-gray-800 transition"
            aria-label="Previous subsystem"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Unified Card */}
          <div
            key={currentIndex}
            className="w-full grid md:grid-cols-2 gap-12
                       border border-gray-800 bg-gray-900/60 backdrop-blur-sm
                       p-12 min-h-[420px]
                       transition-all duration-500 ease-out
                       animate-[fadeSlide_0.5s_ease-out]"
          >
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 uppercase tracking-widest">
                {current.name}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {current.description}
              </p>

              <span className="mt-10 text-xs font-mono text-gray-600">
                {currentIndex + 1} / {subsystems.length}
              </span>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-[260px] object-cover
                           border border-gray-800
                           transition-opacity duration-500
                           animate-[fadeIn_0.6s_ease-out]"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20
                       p-3 rounded-full border border-gray-700
                       hover:bg-gray-800 transition"
            aria-label="Next subsystem"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Subsystems;
