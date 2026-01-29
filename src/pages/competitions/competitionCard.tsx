import { Trophy, Calendar, MapPin, Image as ImageIcon, ChevronLeft, Award, Zap } from "lucide-react";
import { Competition } from "./types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface CompetitionCardProps {
  competition: Competition;
}

const CompetitionCard = ({ competition }: CompetitionCardProps) => {
  const images = competition.media?.images ?? [];
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto bg-[#05070a] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN: Content */}
        <div className="flex-[1.3] p-10 md:p-14 lg:p-16 border-r border-white/5">
          
          <button
            onClick={() => navigate("/competitions")}
            className="group mb-16 flex items-center gap-3 text-white/60 hover:text-cyan-400 transition-colors tracking-[0.2em] text-sm uppercase font-light"
          >
            <ChevronLeft size={18} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
            Return to Competitions
          </button>

          <header className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-cyan-500/50" />
              <span className="text-cyan-500/80 text-xs uppercase tracking-[0.4em] font-light">Archive 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extralight text-white leading-tight mb-10 tracking-wide">
              {competition.name}
            </h1>
            
            <div className="flex flex-wrap gap-12">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium">Period</p>
                <div className="flex items-center gap-3 text-white/70">
                  <Calendar size={18} strokeWidth={1} className="text-cyan-500" />
                  <span className="text-base font-light tracking-wider">{competition.date}</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium">Location</p>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} strokeWidth={1} className="text-cyan-500" />
                  <span className="text-base font-light tracking-wider">{competition.location}</span>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-20">
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-xl tracking-wide">
              {competition.description}
            </p>
          </section>

          <section>
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/80 mb-10 flex items-center gap-4 font-light">
              <Award size={18} strokeWidth={1} className="text-cyan-500" />
              Key Milestones
            </h3>
            
            <div className="grid gap-px bg-white/5 border border-white/5 overflow-hidden rounded-sm">
              {competition.achievements.map((achievement, i) => (
                <div 
                  key={i}
                  className="bg-[#05070a] p-6 flex items-center gap-6 hover:bg-white/[0.02] transition-colors group"
                >
                  <span className="text-xs font-light text-white/20 group-hover:text-cyan-500 transition-colors italic">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/80 font-extralight text-base tracking-wide">{achievement}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Media Showcase */}
        <div className="flex-1 bg-white/[0.01] p-10 flex flex-col items-center justify-start pt-24 gap-10">
          <div className="w-full space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60 font-light">Visual Reference Data</p>
              <Zap size={14} strokeWidth={1} className="text-cyan-500 animate-pulse" />
            </div>

            <div className="space-y-8">
              {images.length > 0 ? (
                images.slice(0, 2).map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    className="relative aspect-video rounded-sm overflow-hidden border border-white/10 group shadow-2xl"
                  >
                    <img 
                      src={img} 
                      alt={`Reference ${i + 1}`} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000" 
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 pointer-events-none group-hover:bg-transparent transition-colors" />
                  </motion.div>
                ))
              ) : (
                <div className="aspect-video rounded-sm border border-dashed border-white/10 flex items-center justify-center">
                  <ImageIcon size={32} strokeWidth={1} className="text-white/10" />
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default CompetitionCard;