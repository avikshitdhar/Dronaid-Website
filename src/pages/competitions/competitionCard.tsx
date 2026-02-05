import {
  Calendar,
  MapPin,
  Image as ImageIcon,
  ChevronLeft,
  Award,
  Zap,
} from "lucide-react";
import { Competition } from "./types";
import { useNavigate } from "react-router-dom";

interface CompetitionCardProps {
  competition: Competition;
}

const CompetitionCard = ({ competition }: CompetitionCardProps) => {
  const images = competition.media?.images ?? [];
  const navigate = useNavigate();

  return (

    <div className="relative flex-1 overflow-y-auto p-8 sm:p-10 space-y-12">
      
      {/* CARD */}
      <div className="w-full max-w-6xl h-full bg-[#05070a] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-[1.2fr_0.8fr]">
        
        {/* LEFT — CONTENT */}
        <div className="flex flex-col h-full">
          
          {/* BACK */}
          <div className="p-6 border-b border-white/5">
            <button
              onClick={() => navigate("/competitions")}
              className="group flex items-center gap-3 text-white/60 hover:text-cyan-400 tracking-[0.2em] text-xs uppercase font-light"
            >
              <ChevronLeft
                size={16}
                strokeWidth={1}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Return
            </button>
          </div>

          {/* CONTENT (internal scroll only if needed) */}
          <div className="flex-1 overflow-y-auto p-8 sm:p-10 space-y-12 scrollbar-thin scrollbar-thumb-white/10">
            
            {/* TITLE */}
            <header className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-cyan-500/50" />
                <span className="text-cyan-500/80 text-xs uppercase tracking-[0.4em] font-light">
                  Archive 2024
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extralight text-white tracking-wide">
                {competition.name}
              </h1>

              <div className="flex flex-wrap gap-10 pt-2">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    Period
                  </p>
                  <div className="flex items-center gap-3 text-white/70">
                    <Calendar size={16} strokeWidth={1} className="text-cyan-500" />
                    <span className="text-sm font-light tracking-wider">
                      {competition.date}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    Location
                  </p>
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin size={16} strokeWidth={1} className="text-cyan-500" />
                    <span className="text-sm font-light tracking-wider">
                      {competition.location}
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* DESCRIPTION */}
            <section>
              <p className="text-white/50 text-base font-light leading-relaxed tracking-wide">
                {competition.description}
              </p>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.4em] text-white/80 flex items-center gap-4 font-light">
                <Award size={16} strokeWidth={1} className="text-cyan-500" />
                Key Milestones
              </h3>

              <div className="space-y-2">
                {competition.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.02] rounded-lg px-5 py-4 flex items-start gap-4"
                  >
                    <span className="text-xs font-light text-white/20 italic pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-white/80 font-extralight text-sm tracking-wide">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* RIGHT — SMALLER MEDIA */}
        <div className="h-full border-l border-white/5 p-8 flex flex-col gap-6">
          
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60 font-light">
              Visual Reference Data
            </p>
            <Zap size={14} strokeWidth={1} className="text-cyan-500" />
          </div>

          {/* Images are now SMALL + CENTERED */}
          <div className="flex flex-col gap-4">
            {images.length > 0 ? (
              images.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img
                    src={img}
                    alt={`Reference ${i + 1}`}
                    className="w-full h-full object-cover opacity-65"
                  />
                  <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />
                </div>
              ))
            ) : (
              <div className="h-40 rounded-lg bg-white/[0.02] flex items-center justify-center">
                <ImageIcon size={28} strokeWidth={1} className="text-white/10" />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompetitionCard;
