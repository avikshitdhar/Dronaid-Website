import HeroSection from "./sections/heroSection";
import CompetitionsGrid from "./sections/competitionsGrid";

const Competitions = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Competitions Grid */}
      <CompetitionsGrid />
    </div>
  );
};

export default Competitions;
