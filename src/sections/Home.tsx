import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Section
 * Hero section with team logo and call-to-action
 */
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
            <span className="text-white font-bold text-6xl">D</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Drone Team
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Innovating the future of aerial technology through passion, precision, and teamwork
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors group"
          >
            Join Our Team
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            to="/drones"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
          >
            <Play className="mr-2" size={20} />
            View Projects
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
