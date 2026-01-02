// src/components/Footer.js

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <motion.a 
                        href="https://github.com/heebu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: "var(--primary-color)" }}
                    >
                        <FaGithub className="social-icon" />
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/idris-adedeji-heebu-prime/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: "var(--primary-color)" }}
                    >
                        <FaLinkedin className="social-icon" />
                    </motion.a>
                    <motion.a 
                        href="https://x.com/Heebu_Prime" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: "var(--primary-color)" }}
                    >
                        <FaTwitter className="social-icon" />
                    </motion.a>
                    <motion.a 
                        href="mailto:your.idrisadedejiayobami.com"
                        whileHover={{ y: -5, color: "var(--primary-color)" }}
                    >
                        <FaEnvelope className="social-icon" />
                    </motion.a>
                </div>

                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Idris Adedeji. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
