import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

const Subsystems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const subsystems = [
    {
      name: "Electronics",
      description:
        "Deals with the onboard components of the drone like flight systems, communications and working, handles control and propulsion. Basically makes a frame functioning.",
      image: `${base}subsystems/electronics.webp`,
    },
    {
      name: "Design Fabrication and Manufacturing",
      description:
        "Involved in the end-to-end design and manufacture of multi-rotor, fixed-wing, and VTOL drones, with particular attention to aerodynamic performance and structural integrity of airframes and payloads.",
      image: `${base}subsystems/dfm.webp`,
    },
    {
      name: "AI and Automation",
      description:
        "This subsystem works on state of the art computer vision models for drones and deep learning.",
      image: `${base}subsystems/ai.webp`,
    },
    {
      name: "Software",
      description:
        "Works on developing the mobile application through which the users can place order and the drone delivers it to them autonomously, it works towards providing access to the tehnology which we create using easy to use mobile apps.",
      image: `${base}subsystems/software.webp`,
    },
    {
      name: "Management",
      description:
        "Handles team coordination, inter-subsystem acitvities, publicity, sponsorship and finance.",
      image: `${base}subsystems/management.webp`,
    },
  ];

  /* ---------------- IMAGE PRELOADING ---------------- */
  useEffect(() => {
    const imageUrls = subsystems.map(s => s.image);

    let loadedCount = 0;

    imageUrls.forEach(src => {
      const img = new Image();
      img.src = src;

      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);
  /* -------------------------------------------------- */

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === subsystems.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? subsystems.length - 1 : prev - 1
    );

  const current = subsystems[currentIndex];

  /* ---------------- PRELOAD FALLBACK ---------------- */
  if (!imagesLoaded) {
    return (
      <section className="py-24 bg-black text-gray-400 flex justify-center items-center">
        Loading subsystems…
      </section>
    );
  }
  /* -------------------------------------------------- */

  return (
    <section id="subsystems" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 md:mb-16">
          Our Subsystems
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-20
                       p-2 md:p-3 bg-black/60 rounded-full"
            aria-label="Previous subsystem"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Card */}
          <div
            key={currentIndex}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-8
                       border border-gray-900 bg-black
                       p-6 md:p-12 min-h-[unset] md:min-h-[420px]
                       transition-all duration-500
                       animate-[fadeSlide_0.5s_ease-out]"
          >
            {/* Image (comes first on mobile) */}
            <div className="flex items-center justify-center order-1 md:order-2">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-[200px] md:h-[260px] object-cover
                           border border-gray-800
                           animate-[fadeIn_0.6s_ease-out]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3
                className="text-xl md:text-2xl font-semibold mb-4 md:mb-6
                           text-blue-600 uppercase tracking-widest"
              >
                {current.name}
              </h3>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {current.description}
              </p>

              <span className="mt-6 md:mt-10 text-xs font-mono text-gray-600">
                {currentIndex + 1} / {subsystems.length}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-20
                       p-2 md:p-3 bg-black/60 rounded-full"
            aria-label="Next subsystem"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Subsystems;
