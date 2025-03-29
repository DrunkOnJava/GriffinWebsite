import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import WorkProcess from './components/WorkProcess';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Services from './components/Services';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <WorkProcess />
        <Projects />
        <FAQ />
        <Services />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;