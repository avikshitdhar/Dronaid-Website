import Home from './Home';
import About from './About';
import Subsystems from './Subsystems';
import Sponsors from './Sponsors';

/**
 * Landing Page
 * Combines all scrollable sections: Home, About, Ambitions, Sponsors
 */
const Landing = () => {
  return (
    <div className="pt-16">
      <Home />
      <About />
      <Subsystems />
      <Sponsors />
    </div>
  );
};

export default Landing;
