import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
// import Experience from '../components/Experience';
// import Projects from '../components/Projects';
import Skills from '../components/Skills';
// import Certifications from '../components/Certifications';
// import Contact from '../components/Contact';

const Home = () => (
  <div className="min-h-screen">
    <Hero />
    <About />
    <Skills/>
  </div>
);

export default Home;