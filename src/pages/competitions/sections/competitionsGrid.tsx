import CompetitionCard from "../competitionCard";
import { competitions } from "../data/competitionsData";

const CompetitionsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {competitions.map((competition, index) => (
        <CompetitionCard key={index} competition={competition} />
      ))}
    </div>
  );
};

export default CompetitionsGrid;
