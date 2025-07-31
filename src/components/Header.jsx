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
                <div className="code-line">const experience = "3+ years";</div>
                <div className="code-line">const flutter_skills = ["Flutter", "Flutter flame",];</div>
                <div className="code-line">const dart_kills = ["Dart", "Dart barebone", "Dart frog"];</div>
                <div className="code-line">const js_skills = ["JS", "React.JS", "Node.js", "Next.js"];</div>
                <div className="code-line">const hubby = ["Gaming", "Coding..", "Hacking", "Cracking"];</div>
                <div className="code-line">const backend_skills = ["Firebase", "Superbase", "Node.js", "Express.js",];
                </div>

                {
                    [1,2,3,4,5,6, 7, 8, 9, 10, 11].map((item, index) => (
                        <div className="code-line">const addiction = "I love coding";</div>))

                }
            </div>

            <div className="intro-content">
                <h1>Hi, I'm Idris Adedeji</h1>

                {/* Typewriter Effect for Skills */}
                <Typewriter
                    options={{
                        strings: ["Flutter Developer", "React Developer", "Web Enthusiast"],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                    }}
                />

                <motion.a
                    rel="preconnect"
                    href="/projects"
                    className="explore-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Explore My Work
                </motion.a>
            </div>
        </header>
    );
};

export default HeaderSection;
