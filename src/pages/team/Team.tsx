import HeroSection from "./Sections/heroSection";
import TeamGrid from "./Sections/TeamGrid";
import AlumniSection from "./Sections/alumniSection";
import CTASection from "./Sections/ctaSection";
import { teamMembers } from "./data/teamMembers";
import { alumniByYear } from "./data/alumniData";

const Team = () => {
  const groupedMembers = teamMembers.reduce<Record<string, typeof teamMembers>>((acc, member) => {
    if (!acc[member.department]) acc[member.department] = [];
    acc[member.department].push(member);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      <HeroSection />
      <TeamGrid groupedMembers={groupedMembers} />
      <AlumniSection alumniByYear={alumniByYear} />
      <CTASection />
    </div>
  );
};

export default Team;
