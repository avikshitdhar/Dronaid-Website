import { Linkedin, Mail, User } from "lucide-react";
import { TeamMember } from "../types";

interface Props {
  groupedMembers: Record<string, TeamMember[]>;
}

const TeamGrid = ({ groupedMembers }: Props) => {
  return (
    <div id="team-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {Object.entries(groupedMembers).map(([department, members]) => (
        <div key={department} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-3">
            {department}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center justify-items-center">
            {members.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-750 transition-all border border-gray-700 w-64 h-80">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={48} className="text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.designation}</p>
                <div className="flex justify-center gap-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
