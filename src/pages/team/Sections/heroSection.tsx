import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import team from "/team-photo.webp";

const HeroSection = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center overflow-hidden z-0"
      style={{ height: "calc(100dvh - 4rem)" }}
    >
      {/* Background Image */}
      <motion.div
        style={{
          backgroundImage: `url(${team})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
        className="absolute inset-0 will-change-transform"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Meet Our{" "}
          <span className="text-blue-600">Team</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A dedicated group of innovators pushing the boundaries of drone technology
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
