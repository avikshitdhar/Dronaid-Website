import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

useEffect(() => {
  const delay = isMobile ? 1200 : 4000;

  const timer = setTimeout(() => setShowContent(true), delay);
  return () => clearTimeout(timer);
}, [isMobile]);

  const letters = [
    { char: 'D', image: `${base}images/d-nobg.png`, delay: 0, scale: 0.85, side: 'left' },
    { char: 'R', image: `${base}images/r-nobg.png`, delay: 0.5, scale: 0.8, side: 'left' },
    { char: 'O', image: `${base}images/o-nobg.png`, delay: 1.2, scale: 1.7, side: 'top' },
    { char: 'N', image: `${base}images/n-nobg.png`, delay: 1.8, scale: 0.75, side: 'right' },
    { char: 'A', image: `${base}images/a-nobg.png`, delay: 2.3, scale: 1.0, side: 'right' },
    { char: 'I', image: `${base}images/i-nobg.png`, delay: 2.8, scale: 0.68, side: 'right' },
    { char: 'D', image: `${base}images/d2.png`, delay: 3.3, scale: 0.85, side: 'right' },
  ];

const mobileOVariants = {
  hidden: {
    y: -400,
    opacity: 0,
    rotate: 180,
    scale: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.8,
      ease: "easeInOut",
    },
  },
};
  // Manually control spacing for each letter (edit freely)
  const xPositionsDesktop = [
    -450, // D
    -300, // R
    -100, // O
    100, // N
    260, // A
    375, // I
    500, // D
  ];

  const xPositionsMobile = [
    -180,
    -120,
    -40,
      40,
    100,
    150,
    200,
  ];


  const letterVariants = (index: number) => {
  let startX = 0;
  let startY = 0;
  let startScale = isMobile ? 0.7 : 0.8;
  let startRotate = 0;
  let finalY = 0;

  const flyDistance = isMobile ? 400 : 1000;

  if (letters[index].side === 'left') {
    startX = -flyDistance;
    startRotate = -30;
  } else if (letters[index].side === 'top') {
    startY = isMobile ? -300 : -800;
    startRotate = 180;
    finalY = isMobile ? -20 : -40;
    startScale = 0.5;
  } else {
    startX = flyDistance;
    startRotate = 30;
  }

  const finalX = isMobile
    ? xPositionsMobile[index]
    : xPositionsDesktop[index];

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
        duration: isMobile ? 1.5 : 2,
        delay: letters[index].delay,
        ease: 'easeInOut',
      },
    },
  };
};
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
        {/* Animated Flying Letters */}
        <div className="mb-8 sm:mb-12 flex justify-center items-center h-32 sm:h-40 md:h-56">
          <div className="relative w-full max-w-4xl flex justify-center items-center">
            {isMobile ? (
  <motion.div
    variants={mobileOVariants}
    initial="hidden"
    animate="visible"
    className="absolute"
  >
    <img
      src={`${base}images/o-nobg.png`}
      alt="O"
      className="h-32 object-contain drop-shadow-lg"
    />
  </motion.div>
) : (
  letters.map((letter, index) => (
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
        className="h-20 sm:h-28 md:h-40 lg:h-48 object-contain drop-shadow-lg"
        style={{
          transform: `scale(${letter.scale})`,
        }}
      />
    </motion.div>
  ))
)}

          </div>
        </div>

        {/* Heading */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-10"
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
        </motion.p> */}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* <Link to="/" state={{ scrollTo: "about" }}>About Us</Link> */}

          <Link
            to="/" state={{ scrollTo: "about" }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-300 hover:bg-[#559e90] text-black rounded-lg font-semibold transition-colors"
          >
            <Play className="mr-2" size={18} />
            About Us
          </Link>

          <Link
            to="/competitions"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-300 hover:bg-[#559e90] text-black rounded-lg font-semibold transition-colors group"
          >
            Our Achievements
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
