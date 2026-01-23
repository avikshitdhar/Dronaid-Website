import { AlumniByYear } from "../types";
import { User, Linkedin, Mail } from "lucide-react";

interface AlumniSectionProps {
  alumniByYear: AlumniByYear;
}

const AlumniSection = ({ alumniByYear }: AlumniSectionProps) => {
  const sortedYears = Object.keys(alumniByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Alumni</h2>
        {/* <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          A proud family of innovators whose legacy continues to inspire.
        </p> */}

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto flex space-x-6 snap-x snap-mandatory">
          {sortedYears.map((year) => (
            <div
              key={year}
              className="flex-shrink-0 w-[800px] bg-black rounded-2xl p-6 snap-start"
            >
              <h3 className="text-2xl font-bold text-center text-white mb-6">{year}</h3>

              {/* Grid for alumni */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {alumniByYear[year].map((alum, i) => (
                  <div
                    key={i}
                    className="bg-gray-950 rounded-lg p-3 flex flex-col items-center text-center border border-black"
                  >
                    <div className="w-20 h-20 mb-2 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                      {alum.image ? (
                        <img
                          src={alum.image}
                          alt={alum.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={32} className="text-white" />
                      )}
                    </div>

                    <h4 className="text-sm font-semibold text-white mb-1">
                      {alum.name}
                    </h4>
                    <p className="text-[#2596be] text-xs font-medium mb-1">
                      {alum.designation}
                    </p>

                    <div className="flex justify-center gap-2">
                      {alum.linkedin && (
                        <a
                          href={alum.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {alum.email && (
                        <a
                          href={`mailto:${alum.email}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Mail size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
