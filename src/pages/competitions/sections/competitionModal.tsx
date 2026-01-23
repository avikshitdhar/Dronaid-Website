import { Competition } from "../types";
import CompetitionCard from "../competitionCard";

interface Props {
  competition: Competition;
  onClose: () => void;
}

const CompetitionModal = ({ competition, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-6">
      <div className="relative max-w-5xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-gray-400 hover:text-white"
        >
          Close ✕
        </button>

        <CompetitionCard competition={competition} />
      </div>
    </div>
  );
};

export default CompetitionModal;
