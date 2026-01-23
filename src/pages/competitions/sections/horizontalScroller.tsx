import { useEffect, useRef } from "react";
import { Competition } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  competitions: Competition[];
}


const HorizontalScroller = ({ competitions }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let rafId: number;
    const speed = 0.6;

    const animate = () => {
      el.scrollLeft += speed;

      // Seamless loop: reset at midpoint
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative mt-6 w-full overflow-hidden px-8">
      <div
        ref={scrollerRef}
        className="flex gap-8 overflow-x-scroll scrollbar-hide cursor-grab select-none"
      >
        {[...competitions, ...competitions].map((competition, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(
                `/competitions/${competition.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")}`
              )
            }

            className="min-w-[320px] h-[220px] rounded-xl overflow-hidden relative border border-gray-800 hover:border-blue-500 transition cursor-pointer"
          >
            <img
              src={competition.media?.images?.[0]}
              alt={competition.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              draggable={false}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-gray-300 tracking-wide">
                {competition.location}
              </p>
              <h3 className="text-lg font-light text-white">
                {competition.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;
