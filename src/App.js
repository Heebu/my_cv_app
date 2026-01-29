import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import HeaderSection from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Marketplace from "./components/Marketplace";
import AllProjects from "./components/Projects";
import Playground from "./components/Playground";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          zIndex: 1000,
          background: 'var(--card-bg)',
          border: 'var(--glass-border)',
          color: 'var(--primary-color)',
          padding: '0.8rem',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          fontSize: '1.2rem',
          boxShadow: 'var(--neon-glow)'
        }}
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </motion.button>

      <HeaderSection />
      <AboutMe />
      <Skills />
      <Playground />
      <Marketplace />
      <AllProjects />
      <Footer />
    </div>
  );
}

export default App;
