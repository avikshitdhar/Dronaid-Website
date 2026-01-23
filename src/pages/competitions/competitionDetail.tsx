import { useParams } from "react-router-dom";
import CompetitionCard from "./competitionCard";
import { competitions } from "./data/competitionsData";

const CompetitionDetail = () => {
  const { slug } = useParams();

  const competition = competitions.find(
    (c) =>
      c.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") === slug
  );

  if (!competition) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Competition not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <CompetitionCard competition={competition} />
      </div>
    </div>
  );
};

export default CompetitionDetail;
