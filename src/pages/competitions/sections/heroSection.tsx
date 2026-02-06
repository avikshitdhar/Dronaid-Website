import { useEffect, useState } from "react";

const heroImage = {
  image: `/images/o-nobg.png`,
  delay: 0.1,
  scale: 1,
  side: "right",
};

const CompetitionHero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative h-[55vh] sm:h-[60vh] lg:h-[65vh] text-white">
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-4xl animate-slideUp">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 sm:mb-6">
              Global Competitive Track Record
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-light leading-tight mb-6 sm:mb-8">
              Engineering Success <br />
              <span className="text-gray-200 font-normal">
                Across International Competitions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-extralight leading-relaxed max-w-2xl">
              A showcase of our performance in international UAV, aerospace,
              and innovation challenges — where real-world flight capability,
              design excellence, and execution define outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image (desktop only) */}
      <div
        className="absolute top-1/2 right-6 xl:right-12 hidden lg:block z-20 pointer-events-none"
        style={{
          transform: animate
            ? "translateX(0) scale(1)"
            : "translateX(120vw) scale(1)",
          opacity: animate ? 1 : 0,
          transition: `transform 1s ease-out ${heroImage.delay}s, opacity 1s ease-out ${heroImage.delay}s`,
        }}
      >
        <img
          src={heroImage.image}
          alt="Hero Visual"
          className="w-[360px] xl:w-[480px] object-contain -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default CompetitionHero;
