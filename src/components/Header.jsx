// src/components/AnimatedHeader.js

import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import '../App.css';

const HeaderSection = () => {
    return (
        <header className="animated-header">
            <div className="coding-background">
                {/* Display animated code snippets */}
                <div className="code-line">const dev = "Heebu-Prime";</div>
                <div className="code-line">const name = "Idris Adedeji";</div>
                <div className="code-line">const experience = "4+ years";</div>
                <div className="code-line">const flutter_skills = ["Flutter", "Flutter flame",];</div>
                <div className="code-line">const dart_kills = ["Dart", "Dart barebone", "Dart frog"];</div>
                <div className="code-line">const js_skills = ["JS", "React.JS", "Node.js", "Next.js"];</div>
                <div className="code-line">const hubby = ["Gaming", "Coding..", "Hacking", "Cracking"];</div>
                <div className="code-line">const backend_skills = ["Firebase", "Superbase", "Node.js", "Express.js",];
                </div>

                {
                    [1,2,3,4,5,6, 7, 8, 9, 10, 11].map((item, index) => (
                        <div key={index} className="code-line">const addiction = "I love coding";</div>))

                }
            </div>

            <motion.div 
                className="intro-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1>Idris Adedeji</h1>
                <h2 style={{ color: 'var(--text-color)', fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Software Engineer</h2>

                {/* Typewriter Effect for Skills */}
                <Typewriter
                    options={{
                        strings: [
                            "Building Scalable Mobile Applications", 
                            "Crafting Responsive Web Interfaces", 
                            "Engineering Robust Backend Systems",
                            "Solving Complex Technical Problems"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                        wrapperClassName: "typewriter-text"
                    }}
                />
                
                <p style={{ marginTop: '1.5rem', color: '#a0a0a0', lineHeight: '1.6', maxWidth: '600px', margin: '1.5rem auto' }}>
                    Transforming ideas into high-performance digital reality. 
                    Specialized in Flutter, React, and modern web technologies.
                </p>

                <motion.a
                    rel="preconnect"
                    href="/projects"
                    className="explore-button"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--primary-color)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Portfolio
                </motion.a>
            </motion.div>
        </header>
    );
};

export default HeaderSection;
