import { useEffect, useRef } from "react";

const base = import.meta.env.BASE_URL;

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

  const loopedSponsors = [...sponsors, ...sponsors];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf: number;

    const speed = window.innerWidth < 768 ? 0.4 : 0.7;

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
      className="bg-black text-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light">
            Our Sponsors
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            We collaborate with industry leaders who support innovation,
            engineering excellence, and real-world impact.
          </p>
        </div>

        {/* Horizontal Logo Scroller */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-10 md:gap-16 will-change-transform"
          >
            {loopedSponsors.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center
                           h-24 md:h-32 w-36 md:w-48"
              >
                <img
                  src={logo}
                  alt="Sponsor logo"
                  className="max-h-16 md:max-h-20
                             max-w-full object-contain
                             invert opacity-80"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div
            className="inline-block border border-gray-900
                       p-6 md:p-8 max-w-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600 uppercase tracking-widest">
              Become a Sponsor
            </h3>

            <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
              Partner with us to support cutting-edge drone research
              and student-driven innovation.
            </p>

            <a
              href="/contact"
              className="inline-block px-6 md:px-8 py-3
                         border border-white text-white
                         hover:bg-white hover:text-black
                         transition-colors rounded-lg"
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
