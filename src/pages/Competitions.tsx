import { Trophy, Calendar, MapPin, Image, Video } from 'lucide-react';

/**
 * Competitions Page
 * Showcases competitions with descriptions, achievements, and media galleries
 */

interface Competition {
  name: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  mediaCount: { images: number; videos: number };
}

const Competitions = () => {
  const competitions: Competition[] = [
    {
      name: 'National Drone Racing Championship 2024',
      date: 'March 2024',
      location: 'Austin, Texas',
      description: 'Our team competed in the fastest drone racing competition in the nation, showcasing our Falcon X1 racing drone. The event featured challenging obstacle courses and time trials that tested both pilot skill and drone performance.',
      achievements: [
        '1st Place - Time Trial',
        '2nd Place - Overall Championship',
        'Best Engineering Design Award',
      ],
      mediaCount: { images: 8, videos: 3 },
    },
    {
      name: 'International Autonomous Systems Competition 2023',
      date: 'November 2023',
      location: 'San Francisco, California',
      description: 'A prestigious competition focusing on autonomous navigation and AI-powered decision making. Our Phoenix Surveillance drone demonstrated advanced obstacle avoidance and autonomous path planning in complex environments.',
      achievements: [
        '1st Place - Autonomous Navigation',
        'Innovation in AI Award',
        'Audience Choice Award',
      ],
      mediaCount: { images: 12, videos: 5 },
    },
    {
      name: 'Collegiate Drone Engineering Challenge 2023',
      date: 'September 2023',
      location: 'Boston, Massachusetts',
      description: 'An engineering-focused competition where teams design and build drones for specific mission profiles. We presented our Eagle Scout mapping drone with advanced LiDAR capabilities and precision surveying features.',
      achievements: [
        '2nd Place - Overall Competition',
        'Best Technical Documentation',
        'Outstanding Presentation Award',
      ],
      mediaCount: { images: 10, videos: 2 },
    },
    {
      name: 'Regional Micro Drone Competition 2023',
      date: 'May 2023',
      location: 'Seattle, Washington',
      description: 'A competition focused on ultra-compact drones for indoor navigation and precision maneuvers. Our Sparrow Micro drone excelled in tight spaces and demonstrated exceptional stability and control.',
      achievements: [
        '1st Place - Indoor Navigation',
        '3rd Place - Overall Rankings',
      ],
      mediaCount: { images: 6, videos: 4 },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-4">Our Competitions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating our achievements and experiences in drone competitions worldwide
          </p>
        </div>
      </div>

      {/* Competitions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {competitions.map((competition, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-600 transition-colors"
          >
            {/* Competition Header */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {competition.name}
              </h2>
              <div className="flex flex-wrap gap-4 text-gray-300">
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2 text-blue-400" />
                  <span>{competition.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-blue-400" />
                  <span>{competition.location}</span>
                </div>
              </div>
            </div>

            {/* Competition Content */}
            <div className="p-8">
              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {competition.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Trophy className="mr-2 text-yellow-500" size={24} />
                  Achievements
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {competition.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                    >
                      <p className="text-gray-200 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Gallery Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Media Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Image Placeholders */}
                  {Array.from({ length: Math.min(competition.mediaCount.images, 3) }).map((_, i) => (
                    <div
                      key={`img-${i}`}
                      className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
                    >
                      <Image size={48} className="text-gray-600" />
                    </div>
                  ))}

                  {/* Video Placeholder */}
                  {competition.mediaCount.videos > 0 && (
                    <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer">
                      <Video size={48} className="text-gray-600" />
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  {competition.mediaCount.images} photos • {competition.mediaCount.videos} videos
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Competitions CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            More Competitions Coming Soon
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Follow our journey as we continue to compete and innovate
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Stay Updated
          </a>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
