import HeroSection from "./sections/heroSection";
import HorizontalScroller from "./sections/horizontalScroller";

import { competitions } from "./data/competitionsData";
import "./competitions.css";

const Competitions = () => {
  return (
    <div
      className="
        competitions-page
        w-full
        text-white
        pt-16
        pb-12
        relative
        overflow-hidden
        bg-animated
      "
    >
      {/* Soft overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Horizontal thumbnails */}
        <HorizontalScroller competitions={competitions} />
      </div>

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
            animation: gradientShift 18s ease infinite;
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

export default Competitions;
