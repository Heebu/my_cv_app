import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                The Engineer's Story
            </motion.h2>

            <motion.div
                className="story-container"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="story-section">
                    <span className="comment">{`/**
 * Professional Profile
 */`}</span>
                    <p className="story-text">
                        I am a <span className="highlight">Software Engineer</span> with a deep-seated passion for creating elegant, efficient solutions to complex problems. With over 4 years of hands-on experience in the digital trenches, I've honed my skills in mobile and web development, specializing in the <span className="highlight">Flutter</span> and <span className="highlight">React</span> ecosystems.
                    </p>
                </div>

                <div className="story-section" style={{ marginTop: '2.5rem' }}>
                    <span className="comment">{`/**
 * Technical Philosophy
 */`}</span>
                    <p className="story-text">
                        My approach to engineering is simple: <span className="highlight">Code is for humans, execution is for machines.</span> I strive to write clean, maintainable, and scalable code that stands the test of time. I believe that the best applications are those that disappear into the background, providing a seamless and intuitive experience for the user.
                    </p>
                </div>

                <div className="story-section" style={{ marginTop: '2.5rem' }}>
                    <span className="comment">{`/**
 * Continuous Evolution
 */`}</span>
                    <p className="story-text">
                        The tech landscape is shifting daily, and I shift with it. From mastering <span className="highlight">Dart Frog</span> for backend logic to implementing complex state management in <span className="highlight">Next.js</span>, my journey is one of constant learning and adaptation. I don't just use tools; I master them to deliver the absolute best results.
                    </p>
                </div>

                <motion.div
                    className="status-chip"
                    style={{
                        marginTop: '3rem',
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        background: 'rgba(0, 243, 255, 0.1)',
                        border: '1px solid var(--primary-color)',
                        color: 'var(--primary-color)',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    Status: Ready for New Challenges
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
