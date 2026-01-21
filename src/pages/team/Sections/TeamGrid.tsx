import { Linkedin, Mail, User, Github } from "lucide-react";
import { motion } from "framer-motion";
import { TeamMember } from "../types";

interface Props {
  groupedMembers: Record<string, TeamMember[]>;
}

const TeamGrid = ({ groupedMembers }: Props) => {
  return (
    <div
      id="team-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20"
    >
      {Object.entries(groupedMembers).map(([department, members]) => (
        <div key={department} className="text-center">
          {/* Department Title */}
          <h2 className="text-3xl font-bold text-white mb-10 tracking-wide">
            {department}
          </h2>

          {/* ✅ Clean, Centered Grid — no box background, subtle spacing */}
          <div className="flex flex-wrap justify-center gap-[15px]">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{
                  type: "spring",
                  damping: 100,
                  stiffness: 10000,
                  duration: 0.02,
                }}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center border border-black w-64 h-80 cursor-pointer hover:border-white transition-all duration-300"
              >
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.25 }}
                  className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center shadow-md shadow-black/30"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={48} className="text-white" />
                  )}
                </motion.div>

                {/* Name & Designation */}
                <h3 className="text-xl font-semibold text-[#2596be] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#2596be] font-medium mb-3">
                  {member.designation}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  {member.linkedin && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.05 }}
                      className="text-black hover:text-blue-500 transition-colors duration-200"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  )}
                  {member.github && (
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.05 }}
                      className="text-black hover:text-blue-500 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {member.email && (
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.05 }}
                      className="text-black hover:text-blue-400 transition-colors duration-200"
                    >
                      <Mail size={20} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
