const CompetitionHero = () => {
  return (
    <section className="relative h-[65vh] text-white ">
      {/* Dark background / overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl animate-slideUp">
            {/* Eyebrow */}
            <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
              Global Competitive Track Record
            </p>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-light leading-tight mb-8">
              Engineering Success <br />
              <span className="text-gray-200 font-normal">
                Across International Competitions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 font-extralight leading-relaxed max-w-2xl">
              A showcase of our performance in international UAV, aerospace,
              and innovation challenges - where real-world flight capability,
              design excellence, and execution define outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionHero;

