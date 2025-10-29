import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import team from "/team-photo.jpg";

const HeroSection = () => {
  const scrollToTeam = () => {
    const section = document.getElementById("team-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center bg-center bg-cover z-0"
      style={{
        backgroundImage: `url(${team})`,
        height: "calc(100dvh - 4rem)",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Meet Our Team
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A dedicated group of innovators pushing the boundaries of drone technology
        </p>
        <motion.div
          onClick={scrollToTeam}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-[calc(1.5rem+env(safe-area-inset-bottom))] flex justify-center cursor-pointer"
        >
          <ArrowDown size={42} className="text-white hover:text-blue-400 transition-colors" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
