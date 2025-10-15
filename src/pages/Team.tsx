import { User } from 'lucide-react';

/**
 * Team Page
 * Grid display of all team members with their roles/designations
 */

interface TeamMember {
  name: string;
  designation: string;
  department?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    { name: 'Michael Anderson', designation: 'Team Captain', department: 'Leadership' },
    { name: 'Sarah Williams', designation: 'Technical Lead', department: 'Engineering' },
    { name: 'David Chen', designation: 'Flight Operations Manager', department: 'Operations' },

    { name: 'Emily Rodriguez', designation: 'Lead Mechanical Engineer', department: 'Engineering' },
    { name: 'James Kim', designation: 'Lead Electrical Engineer', department: 'Engineering' },
    { name: 'Sophia Patel', designation: 'Lead Software Engineer', department: 'Engineering' },

    { name: 'Ryan Thompson', designation: 'Aerodynamics Specialist', department: 'Engineering' },
    { name: 'Olivia Martinez', designation: 'Control Systems Engineer', department: 'Engineering' },
    { name: 'Lucas Brown', designation: 'Embedded Systems Developer', department: 'Engineering' },

    { name: 'Emma Wilson', designation: 'Computer Vision Engineer', department: 'Software' },
    { name: 'Noah Johnson', designation: 'AI/ML Engineer', department: 'Software' },
    { name: 'Ava Davis', designation: 'Full Stack Developer', department: 'Software' },

    { name: 'Isabella Garcia', designation: 'CAD Designer', department: 'Design' },
    { name: 'Ethan Lee', designation: 'Manufacturing Lead', department: 'Production' },
    { name: 'Mia Taylor', designation: 'Test Pilot', department: 'Operations' },

    { name: 'Alexander Moore', designation: 'Electronics Technician', department: 'Engineering' },
    { name: 'Charlotte White', designation: 'Battery Systems Engineer', department: 'Engineering' },
    { name: 'Benjamin Harris', designation: 'Communication Systems', department: 'Engineering' },

    { name: 'Amelia Clark', designation: 'Project Manager', department: 'Management' },
    { name: 'Daniel Lewis', designation: 'Safety Officer', department: 'Operations' },
    { name: 'Harper Robinson', designation: 'Marketing Lead', department: 'Outreach' },

    { name: 'Jack Walker', designation: 'Sponsorship Coordinator', department: 'Outreach' },
    { name: 'Lily Young', designation: 'Social Media Manager', department: 'Outreach' },
    { name: 'Mason Hall', designation: 'Documentation Lead', department: 'Management' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              {/* Member Photo (Placeholder with initials) */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>

              {/* Member Name */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>

              {/* Designation */}
              <p className="text-blue-400 font-medium mb-1">
                {member.designation}
              </p>

              {/* Department (Optional) */}
              {member.department && (
                <p className="text-gray-500 text-sm">
                  {member.department}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
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
