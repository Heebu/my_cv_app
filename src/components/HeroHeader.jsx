
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const HeroHeader = () => {
    return (
        <header className="hero-header">
            {/* Navigation */}
            <nav className="nav-bar">
                <h1 className="logo">Idris Adedeji</h1>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="hero-title">Hi, I'm Idris Adedeji</h2>
                <p className="hero-subtitle">A passionate Flutter Developer exploring web development and React.</p>

                {/* Animated CTA */}
                <motion.a
                    href="#projects"
                    className="hero-cta"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    Explore My Work
                </motion.a>
            </motion.div>
        </header>
    );
};

export default HeroHeader;
