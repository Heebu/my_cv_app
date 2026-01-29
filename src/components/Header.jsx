import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import '../App.css';

const HeaderSection = () => {
    const codeLines = [
        'const developer = { name: "Idris Adedeji", role: "Software Engineer" };',
        'function build(dream) { return dream.map(idea => code(idea)); }',
        'import { Creativity, Logic } from "innovation";',
        'while(awake) { code(); drink(Coffee); }',
        'const skills = ["Flutter", "React", "Node.js", "Cloud"];',
        'export default perfection;',
    ];

    return (
        <header className="animated-header">
            <div className="coding-background">
                {Array(20).fill(0).map((_, i) => (
                    <div
                        key={i}
                        className="code-line"
                        style={{
                            animationDelay: `${i * 0.5}s`,
                            opacity: 0.1,
                            fontSize: `${Math.random() * 0.5 + 0.8}rem`,
                            marginLeft: `${Math.random() * 20}%`
                        }}
                    >
                        {codeLines[i % codeLines.length]}
                    </div>
                ))}
            </div>

            <motion.div
                className="intro-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <span className="comment" style={{ fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
                        {`// Welcome to my digital workspace`}
                    </span>
                    <h1>Idris Adedeji</h1>

                    <div className="typewriter-text">
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
                            }}
                        />
                    </div>

                    <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto' }}>
                        Transforming complex ideas into high-performance digital reality.
                        Specialized in Flutter, React, and modern full-stack architectures.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
                        <motion.a
                            href="#projects"
                            className="explore-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Portfolio
                        </motion.a>
                        <motion.a
                            href="https://github.com/heebu"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '1.2rem 2.5rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                color: 'var(--text-color)',
                                border: 'var(--glass-border)',
                                fontWeight: '600',
                                backgroundColor: 'var(--card-bg)',
                                backdropFilter: 'blur(10px)'
                            }}
                            whileHover={{ backgroundColor: 'var(--primary-color)', color: '#000', borderColor: 'var(--primary-color)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ position: 'absolute', bottom: '2rem', color: 'var(--text-muted)' }}
            >
                ↓ Scroll to explore
            </motion.div>
        </header>
    );
};

export default HeaderSection;
