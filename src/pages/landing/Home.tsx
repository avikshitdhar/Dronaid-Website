import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

/**
 * Home Section
 * Hero section with animated flying letters spelling "DRONAID"
 */
const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show CTA buttons after animation completes
    const timer = setTimeout(() => setShowContent(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Letter animation configuration
  const letters = [
    { char: 'D', image: `${base}images/d-nobg.png`, delay: 0, scale: 0.85, side: 'left' },
    { char: 'R', image: `${base}images/r-nobg.png`, delay: 0.5, scale: 0.8, side: 'left' },
    { char: 'O', image: `${base}images/o-nobg.png`, delay: 1.2, scale: 1.7, side: 'top' },
    { char: 'N', image: `${base}images/n-nobg.png`, delay: 1.8, scale: 0.75, side: 'right' },
    { char: 'A', image: `${base}images/a-nobg.png`, delay: 2.3, scale: 1.0, side: 'right' },
    { char: 'I', image: `${base}images/i-nobg.png`, delay: 2.8, scale: 0.68, side: 'right' },
    { char: 'D', image: `${base}images/d2.png`, delay: 3.3, scale: 0.85, side: 'right' },
  ];

  // Animation variants for letters coming from different directions
  const letterVariants = (index: number) => {
    const letter = letters[index];
    const spacing = 150;
    const totalWidth = 6 * spacing;
    const finalX = (index * spacing) - (totalWidth / 2);

    // Different starting positions based on side
    let startX, startY, startScale, startRotate;
    let finalY = 0; // Default y position for all letters
    
    if (letter.side === 'left') {
      startX = -1000;
      startY = 0;
      startScale = 0.8;
      startRotate = -45;
    } else if (letter.side === 'top') {
      startX = 0;
      startY = -800;
      startScale = 0.5;
      startRotate = 180;
      finalY = -40; // Move O slightly above the baseline
    } else if (letter.side === 'right') {
      startX = 1000;
      startY = 0;
      startScale = 0.8;
      startRotate = 45;
    }

    return {
      hidden: {
        x: startX,
        y: startY,
        opacity: 0,
        rotate: startRotate,
        scale: startScale,
      },
      visible: {
        x: finalX,
        y: finalY,
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          duration: 2,
          delay: letter.delay,
          ease: 'easeInOut',
        },
      },
    };
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        {/* Animated Flying Letters */}
        <div className="mb-12 flex justify-center items-center h-48 md:h-64">
          <div className="relative w-full max-w-4xl flex justify-center items-center" style={{ height: '200px' }}>
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                variants={letterVariants(index)}
                initial="hidden"
                animate="visible"
                className="absolute"
              >
                <img
                  src={letter.image}
                  alt={letter.char}
                  className="h-32 md:h-40 lg:h-48 object-contain filter drop-shadow-lg"
                  style={{ transform: `scale(${letter.scale})` }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-20"
        >
          Innovating Aerial Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Innovating the future of aerial technology through passion, precision, and teamwork
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 4.2, duration: 0.8 }}
          className="mt-16 animate-bounce"
        >
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
