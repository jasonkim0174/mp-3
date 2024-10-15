import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Project from './pages/Projects';
import References from './pages/References';
import Skills from './pages/Skills';


function App() {
  return (
    <Router>
      <Header />
      <div className="layout-container">
        <Navigation />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/project" element={<Project />} />
            <Route path="/references" element={<References />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
