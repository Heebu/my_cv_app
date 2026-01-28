import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import '../App.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="social-links">
                <motion.a
                    href="https://github.com/heebu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ y: -5, color: 'var(--primary-color)' }}
                >
                    <FiGithub />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/idris-adedeji-heebu-prime/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ y: -5, color: '#0077B5' }}
                >
                    <FiLinkedin />
                </motion.a>
                <motion.a
                    href="https://x.com/Heebu_Prime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ y: -5, color: '#1DA1F2' }}
                >
                    <FiTwitter />
                </motion.a>
                <motion.a
                    href="mailto:your.idrisadedejiayobami.com"
                    className="social-icon"
                    whileHover={{ y: -5, color: 'var(--secondary-color)' }}
                >
                    <FiMail />
                </motion.a>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Designed & Engineered by <span className="highlight">Idris Adedeji</span>
                </p>
                <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                    © {currentYear} Heebu Prime. All rights reserved.
                </p>
            </div>

            <motion.div
                style={{
                    marginTop: '3rem',
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    letterSpacing: '1px'
                }}
            >
                <span>BUILT_WITH: REACT_18</span>
                <span>•</span>
                <span>ANIMATED_WITH: FRAMER_MOTION</span>
                <span>•</span>
                <span>STYLED_WITH: VANILLA_CSS</span>
            </motion.div>
        </footer>
    );
};

export default Footer;
