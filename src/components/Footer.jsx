// src/components/Footer.js

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://github.com/heebu" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/idris-adedeji-heebu-prime/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://x.com/Heebu_Prime" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                    <a href="mailto:your.idrisadedejiayobami.com">
                        <FaEnvelope className="social-icon" />
                    </a>
                </div>

                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Idris Adedeji. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
