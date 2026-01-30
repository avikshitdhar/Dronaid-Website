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
        bg-gradient-to-br
        from-blue-800
      "
    >
      {/* Soft overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Horizontal thumbnails */}
        <HorizontalScroller competitions={competitions} />
      </div>
    </div>
  );
};

export default Competitions;
