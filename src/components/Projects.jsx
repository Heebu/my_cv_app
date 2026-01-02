// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projects = [
    {
        title: "Newsry",
        image: "/Untitled design.png",
        github: "https://drive.google.com/drive/folders/10XhNifC86vt6cZF6sfT-gyd-3cpqzj9q?usp=sharing"
    },
    {
        title: "Nextbud",
        image: "https://play-lh.googleusercontent.com/cGic1pv73sfN6fJkCVFGnLj96GZqhrQ8rg_GrskbVxA5_pLUAGp5wjAVTPK6hFNdFXA=w240-h480-rw",
        github: "https://play.google.com/store/apps/details?id=com.nextbud.app&hl=en"
    },
    {
        title: "BootIQ",
        image: "https://play-lh.googleusercontent.com/EylVqq-InbAuzt4JLJywNb3svWpjcM_NAet5RHcQ4BeFR2vQjL7c7T9qGBXoXj-X_A=w240-h480-rw",
        github: "https://play.google.com/store/apps/details?id=com.bootiq.user"
    },
    {
        title: "Zella Marketplace",
        image: "https://play-lh.googleusercontent.com/3RuaQfTeXhu5fZAzEoATnZApbIFl_EBJFoz3xF9xYiyRHrobo6F7TezIFcXa1wShRkDG0Y9D8gdROR3nxaYewg=w240-h480-rw",
        github: "https://play.google.com/store/apps/details?id=com.zella.ng"
    },
    {
        title: "QuikFood",
        image: "https://play-lh.googleusercontent.com/Ywo7jS0_h_kp_bdDrJRdJLPzzKLTbDc2-qgJ1CvKDf2adi0KF-8RQbWH6zRGeMfjsbY=w240-h480-rw",
        github: "https://play.google.com/store/apps/details?id=com.quikfood.quik_food"
    },

];

const AllProjects = () => {
    return (
        <section className="projects">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                My Projects
            </motion.h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 0 25px rgba(0, 243, 255, 0.4)",
                            borderColor: "var(--primary-color)"
                        }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-overlay">
                            <h3>{project.title}</h3>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="Download-link">
                                Download app
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="more-projects">
                <motion.a 
                    href="https://github.com/heebu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "var(--secondary-color)", color: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                >
                    See GitHub Projects
                </motion.a>
            </div>
        </section>
    );
};

export default AllProjects;
