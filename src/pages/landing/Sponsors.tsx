import { useEffect, useRef } from "react";

const base = import.meta.env.BASE_URL;

/**
 * Sponsors Section
 * Fullscreen, monochrome, infinite horizontal logo scroll
 */
const Sponsors = () => {  
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const sponsors = [
    `${base}sponsors/altair.webp`,
    `${base}sponsors/altium.webp`,
    `${base}sponsors/ansys.webp`,
    `${base}sponsors/apc.webp`,
    `${base}sponsors/carbon.webp`,
    `${base}sponsors/harness.webp`,
    `${base}sponsors/onlyscrews.webp`,
    `${base}sponsors/simscale.webp`,
    `${base}sponsors/solidworks.webp`,
    `${base}sponsors/t-motor.webp`,
  ];

  // Duplicate list for seamless loop
  const loopedSponsors = [...sponsors, ...sponsors];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf: number;
    const speed = 0.7;

    const tick = () => {
      posRef.current -= speed;

      if (Math.abs(posRef.current) >= el.scrollWidth / 2) {
        posRef.current = 0;
      }

      el.style.transform = `translateX(${posRef.current}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="sponsors"
      className="min-h-screen bg-black text-white flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Our Sponsors
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We collaborate with industry leaders who support innovation,
            engineering excellence, and real-world impact.
          </p>
        </div>

        {/* Horizontal Logo Scroller */}
      <div className="w-full overflow-hidden px-6">
        <div
          ref={trackRef}
          className="flex gap-16 will-change-transform"
        >
          {loopedSponsors.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-32 w-48"
            >
              <img
                src={logo}
                alt="Sponsor logo"
                className="max-h-20 max-w-full object-contain invert opacity-80"
              />
            </div>
          ))}
        </div>
      </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-light mb-3">
              Become a Sponsor
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Partner with us to support cutting-edge drone research
              and student-driven innovation.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border border-white
                         text-white hover:bg-white hover:text-black
                         transition-colors rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
