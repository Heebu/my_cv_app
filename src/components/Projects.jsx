// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projects = [
    {
        title: "Med care",
        image: "https://bvmedical.com/cdn/shop/products/30-300-254_6_1445x.png?v=1665760682",
        github: "https://github.com/yourusername/project1"
    },
    {
        title: "BootIQ",
        image: "https://s3-alpha-sig.figma.com/img/060f/f514/32e84344802578fb035b3c4d31bf5336?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jCT8ssitMsTZOoEs~d12vX9nUiNGYzubdoJPjvmWk61B-kh1Ux~komNyT5h4qdIyzTIQmfRHnzPntymJoRkRnI8nH-ma2a4WZZ607gNKhUEXryEfgf6Y5x9ZIYDZR3DB1AxURu~RiJNG6H33ziwphc54WEJGxMaEldRYw9QDYO8~GmDeF84O6F8nJY3HGXSvxV4Z1sRHAqYw1Q98QTjj4Uc-tE77093BROG0dx6aSbzfaYvkC1RdQJMDw3Qhl-JqK15JPROK8n965WNOyPqIjRNfpttg6-nMUc5heoCtACKpvEEuOrqS7YsyXXlzfyn20oHxkGrieeQXIE-nKtLQTg__",
        github: "https://github.com/yourusername/project2"
    },
    {
        title: "Sell-X",
        image: "https://forgeglobal.com/site/assets/files/288420/x-energy-logo-500w.png",
        github: "https://github.com/yourusername/project3"
    },
    // Add more projects here
];

const AllProjects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-item"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-overlay">
                            <h3>{project.title}</h3>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="more-projects">
                <a href="https://github.com/heebu" target="_blank" rel="noopener noreferrer">
                    See more on GitHub
                </a>
            </div>
        </section>
    );
};

export default AllProjects;
