import Home from '../sections/Home';
import About from '../sections/About';
import Ambitions from '../sections/Ambitions';
import Sponsors from '../sections/Sponsors';

/**
 * Landing Page
 * Combines all scrollable sections: Home, About, Ambitions, Sponsors
 */
const Landing = () => {
  return (
    <div className="pt-16">
      <Home />
      <About />
      <Ambitions />
      <Sponsors />
    </div>
  );
};

export default Landing;
