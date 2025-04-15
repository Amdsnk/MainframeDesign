import React, { useEffect } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Set the page title
    document.title = 'Twelve Zodiac | Interactive Mainframe';
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
