import { useEffect, useRef } from "react";
import * as THREE from "three";

import HeroSection from "./sections/heroSection";
import HorizontalScroller from "./sections/horizontalScroller";

import { competitions } from "./data/competitionsData";
import "./competitions.css";

const Competitions = () => {
  // Vanta refs
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  /* ---------------- VANTA BACKGROUND ---------------- */
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      if (window.VANTA && window.VANTA.FOG && vantaRef.current) {
        // @ts-ignore
        vantaEffect.current = window.VANTA.FOG({
          el: vantaRef.current,
          THREE,
          highlightColor: 0x5578f1,
          midtoneColor: 0x888888,
          lowlightColor: 0x000000,
          baseColor: 0x000000,
          blurFactor: 0.6,
          speed: 0.8,
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
  /* -------------------------------------------------- */

  return (
    <div
      ref={vantaRef}
      className="competitions-page w-full bg-black text-white pt-16 pb-12"
    >
      {/* Hero */}
      <HeroSection />

      {/* Horizontal thumbnails (navigation handled INSIDE) */}
      <HorizontalScroller competitions={competitions} />
    </div>
  );
};

export default Competitions;
