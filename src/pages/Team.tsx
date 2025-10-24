import { User } from 'lucide-react';
import team from '../assets/team-photo.jpg';

/**
 * Team Page
 * Grid display of all team members with their roles/designations
 */

interface TeamMember {
  name: string;
  designation: string;
  department?: string;
  image?: string; // ✅ new optional field for profile image
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    { name: 'Tushar Bhat', designation: 'Team Captain', department: 'Executive Board', image: '../assets/team/michael.jpg' },
    { name: 'Aarya Singh', designation: 'Team Manager', department: 'Executive Board', image: '../assets/team/michael.jpg' },
    { name: 'Varun', designation: 'Flight Operations Manager', department: 'Operations', image: '../assets/team/michael.jpg' },

    { name: 'Aditi Nair', designation: 'Lead Mechanical Engineer', department: 'Engineering', image: '../assets/team/michael.jpg'  },
    { name: 'Kevin Siby', designation: 'Lead Electrical Engineer', department: 'Engineering', image: '../assets/team/michael.jpg'  },
    { name: 'Shashank Devadiga', designation: 'Lead Software Engineer', department: 'Engineering', image: '../assets/team/michael.jpg'  },

    { name: 'Laksh', designation: 'Aerodynamics Specialist', department: 'Engineering', image: '../assets/team/michael.jpg'  },
    { name: 'Hursh Pai', designation: 'Control Systems Engineer', department: 'Engineering', image: '../assets/team/michael.jpg'  },
    { name: '', designation: 'Embedded Systems Developer', department: 'Engineering', image: '../assets/team/michael.jpg'  },

    { name: 'Emma Wilson', designation: 'Computer Vision Engineer', department: 'Software', image: '../assets/team/michael.jpg'  },
    { name: 'Noah Johnson', designation: 'AI/ML Engineer', department: 'Software', image: '../assets/team/michael.jpg'  },
    { name: 'Ava Davis', designation: 'Full Stack Developer', department: 'Software', image: '../assets/team/michael.jpg'  },

    { name: 'Isabella Garcia', designation: 'CAD Designer', department: 'Design' , image: '../assets/team/michael.jpg' },
    { name: 'Ethan Lee', designation: 'Manufacturing Lead', department: 'Production' , image: '../assets/team/michael.jpg' },
    { name: 'Mia Taylor', designation: 'Test Pilot', department: 'Operations' , image: '../assets/team/michael.jpg' },

    { name: 'Alexander Moore', designation: 'Electronics Technician', department: 'Engineering', image: '../assets/team/michael.jpg'  },
    { name: 'Charlotte White', designation: 'Battery Systems Engineer', department: 'Engineering', image: '../assets/team/michael.jpg'  },
    { name: 'Benjamin Harris', designation: 'Communication Systems', department: 'Engineering', image: '../assets/team/michael.jpg'  },

    { name: 'Amelia Clark', designation: 'Project Manager', department: 'Management', image: '../assets/team/michael.jpg'  },
    { name: 'Daniel Lewis', designation: 'Safety Officer', department: 'Operations', image: '../assets/team/michael.jpg'  },
    { name: 'Harper Robinson', designation: 'Marketing Lead', department: 'Outreach', image: '../assets/team/michael.jpg'  },

    { name: 'Jack Walker', designation: 'Sponsorship Coordinator', department: 'Outreach', image: '../assets/team/michael.jpg'  },
    { name: 'Lily Young', designation: 'Social Media Manager', department: 'Outreach', image: '../assets/team/michael.jpg'  },
    { name: 'Mason Hall', designation: 'Documentation Lead', department: 'Management', image: '../assets/team/michael.jpg'  },
  ];

   return (
    <div className="min-h-screen bg-gray-950 pt-16">
      {/* ✅ Hero Section with Background Image */}
      <div
        className="relative h-[92vh] flex items-center justify-center bg-center bg-cover"
  style={{ backgroundImage: `url(${team})` }}      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A dedicated group of innovators pushing the boundaries of drone technology
          </p>
        </div>
      </div>
      

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-800 transition-all border border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
            >
              {/* Member Photo */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={48} className="text-white" />
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 font-medium mb-1">{member.designation}</p>
              {member.department && (
                <p className="text-gray-500 text-sm">{member.department}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-300 text-lg mb-8">
            We're always looking for passionate individuals to join our mission
          </p>
          <a
            href="/apply"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;