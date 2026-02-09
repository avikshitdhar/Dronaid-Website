import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/landing/Landing";
import Drones from "./pages/drones/drone";
import Team from "./pages/team/Team";
import Contact from "./pages/Contact";
import Competitions from "./pages/competitions/competitions";
import CompetitionDetail from "./pages/competitions/competitionDetail";
import ScrollToComponent from "./pages/landing/scrollToComponent";
import { ScrollProvider } from "./pages/landing/scrollContext";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <ScrollProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <ScrollToTop />
        <ScrollToComponent />

        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/team" element={<Team />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/competitions/:slug" element={<CompetitionDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;
