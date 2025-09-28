import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Personal from '../components/Personal';
// import Experience from '../components/Experience';
// import Projects from '../components/Projects';
// import Certifications from '../components/Certifications';
// import Contact from '../components/Contact';

const Home = () => (
  <div className="min-h-screen">
    <Hero />
    <About />
    <Skills/>
    <Personal />
  </div>
);

export default Home;