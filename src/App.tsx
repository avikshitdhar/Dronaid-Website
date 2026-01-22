import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/landing/Landing';
import Drones from './pages/drones/drone';
import Team from './pages/team/Team';
import Contact from './pages/Contact';
import Competitions from './pages/competitions/competitions';

/**
 * Main App Component
 * Sets up routing and layout structure
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/team" element={<Team />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
