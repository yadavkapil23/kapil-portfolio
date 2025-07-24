import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import ExperiencePage from './pages/Experience';
import CertificationsPage from './pages/Certifications';
import SkillsPage from './pages/Skills';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;