import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import '../App.css';

const projects = [
    {
        title: "Newsry",
        description: "A comprehensive news aggregation platform delivering real-time updates. Features include personalized feeds and offline reading capabilities.",
        tech: ["Flutter", "Dart", "REST API"],
        image: "/Untitled design.png",
        link: "https://drive.google.com/drive/folders/10XhNifC86vt6cZF6sfT-gyd-3cpqzj9q?usp=sharing",
        type: "Mobile App"
    },
    {
        title: "Nextbud",
        description: "An innovative productivity tool designed to streamline task management. Implements complex state management and local data persistence.",
        tech: ["Flutter", "Firebase", "State Management"],
        image: "https://play-lh.googleusercontent.com/cGic1pv73sfN6fJkCVFGnLj96GZqhrQ8rg_GrskbVxA5_pLUAGp5wjAVTPK6hFNdFXA=w240-h480-rw",
        link: "https://play.google.com/store/apps/details?id=com.nextbud.app&hl=en",
        type: "Mobile App"
    },
    {
        title: "BootIQ",
        description: "A specialized educational application offering interactive quizzes and progress tracking. Built with a focus on performance optimization.",
        tech: ["React Native", "Node.js", "MongoDB"],
        image: "https://play-lh.googleusercontent.com/EylVqq-InbAuzt4JLJywNb3svWpjcM_NAet5RHcQ4BeFR2vQjL7c7T9qGBXoXj-X_A=w240-h480-rw",
        link: "https://play.google.com/store/apps/details?id=com.bootiq.user",
        type: "Cross Platform"
    },
    {
        title: "Zella Marketplace",
        description: "A robust e-commerce solution facilitating secure transactions and inventory management. Showcases advanced API integration.",
        tech: ["Flutter", "Stripe API", "Cloud Functions"],
        image: "https://play-lh.googleusercontent.com/3RuaQfTeXhu5fZAzEoATnZApbIFl_EBJFoz3xF9xYiyRHrobo6F7TezIFcXa1wShRkDG0Y9D8gdROR3nxaYewg=w240-h480-rw",
        link: "https://play.google.com/store/apps/details?id=com.zella.ng",
        type: "E-commerce"
    },
    {
        title: "QuikFood",
        description: "A food delivery application connecting users with local restaurants. Features real-time order tracking and geolocation services.",
        tech: ["Flutter", "Google Maps API", "Firebase"],
        image: "https://play-lh.googleusercontent.com/Ywo7jS0_h_kp_bdDrJRdJLPzzKLTbDc2-qgJ1CvKDf2adi0KF-8RQbWH6zRGeMfjsbY=w240-h480-rw",
        link: "https://play.google.com/store/apps/details?id=com.quikfood.quik_food",
        type: "Delivery"
    }
];

const AllProjects = () => {
    return (
        <section className="projects" id="projects">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Major Expeditions
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(3, 0, 20, 0.7)',
                                backdropFilter: 'blur(5px)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '12px',
                                fontSize: '0.7rem',
                                color: 'var(--primary-color)',
                                border: '1px solid rgba(0, 243, 255, 0.2)'
                            }}>
                                {project.type}
                            </div>
                        </div>

                        <div className="project-overlay">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: '#fff' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>

                            <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    marginTop: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--primary-color)',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.9rem'
                                }}
                            >
                                Launch Project <FiExternalLink />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                <motion.a
                    href="https://github.com/heebu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="explore-button"
                    style={{ background: 'transparent', border: '1px solid var(--secondary-color)', color: 'var(--secondary-color)', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
                    whileHover={{ background: 'var(--secondary-color)', color: '#fff' }}
                >
                    <FiGithub /> More on GitHub
                </motion.a>
            </div>
        </section>
    );
};

export default AllProjects;
