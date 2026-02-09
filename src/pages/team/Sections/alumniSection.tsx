import { AlumniByYear } from "../types";
import { User, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface AlumniSectionProps {
  alumniByYear: AlumniByYear;
}

const AlumniSection = ({ alumniByYear }: AlumniSectionProps) => {
  const years = Object.keys(alumniByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const activeYear = years[activeYearIndex];
  const alumni = alumniByYear[activeYear];

  const prevYear = () => {
    setActiveYearIndex((i) => Math.max(i - 1, 0));
  };

  const nextYear = () => {
    setActiveYearIndex((i) => Math.min(i + 1, years.length - 1));
  };

  /* ---------------- IMAGE PRELOADING ---------------- */
  useEffect(() => {
    setImagesLoaded(false);

    const imageUrls = alumni
      .map(alum => alum.image)
      .filter(Boolean) as string[];

    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

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
  }, [alumni]);
  /* -------------------------------------------------- */

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Our Alumni
        </h2>

        {/* YEAR NAVIGATION */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            onClick={prevYear}
            disabled={activeYearIndex === 0}
            className="p-2 rounded-full border border-gray-700 text-gray-400
                       hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-2xl font-semibold text-white">
            {activeYear}
          </span>

          <button
            onClick={nextYear}
            disabled={activeYearIndex === years.length - 1}
            className="p-2 rounded-full border border-gray-700 text-gray-400
                       hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* PRELOAD FALLBACK */}
        {!imagesLoaded ? (
          <div className="flex justify-center items-center py-24 text-gray-400">
            Loading alumni…
          </div>
        ) : (
          /* ALUMNI GRID — ALL MEMBERS */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {alumni.map((alum, i) => (
              <div
                key={i}
                className="bg-gray-950 rounded-lg p-4 flex flex-col items-center
                           text-center border border-black"
              >
                <div
                  className="w-20 h-20 mb-3 rounded-full overflow-hidden
                             bg-gray-700 flex items-center justify-center"
                >
                  {alum.image ? (
                    <img
                      src={alum.image}
                      alt={alum.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={32} className="text-white" />
                  )}
                </div>

                <h4 className="text-sm font-semibold text-white mb-1">
                  {alum.name}
                </h4>

                <p className="text-[#2596be] text-xs font-medium mb-2">
                  {alum.designation}
                </p>

                <div className="flex gap-2">
                  {alum.linkedin && (
                    <a
                      href={alum.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-opacity"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}

                  {alum.email && (
                    <a
                      href={`mailto:${alum.email}`}
                      className="text-gray-400 hover:text-blue-400 transition-opacity"
                    >
                      <Mail size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(AlumniSection);
