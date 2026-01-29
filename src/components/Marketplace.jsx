import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiUsers, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import '../App.css';

/**
 * 💡 POPULATION GUIDE:
 * To add new items, simply update the arrays below.
 * 
 * - marketplaceItems: Apps or scripts for sale.
 * - communityProjects: Open-source or free community tools.
 */

const marketplaceItems = [
      {
            id: 1,
            title: "Dreap",
            price: "$49",
            description: "A complete Flutter & Firebase boilerplate with dating app design.",
            features: ["paystack Integration", "Auth Flow", "Push Notifications", "Geolocator", "Realtime Database", ],
            link: "wa.me/2348112006431"
      },
      {
            id: 2,
            title: "E-commerce Pro",
            price: "$89",
            description: "Ready-to-deploy multi-vendor marketplace app with admin panel.",
            features: ["Cart System", "Vendor Dash", "Order Tracking", "Realtime Database", "Push Notifications", "Geolocator", "Stripe Integration", "chat system"],
            link: "wa.me/2348112006431"
      },

      {
            id: 3,
            title: "Newsry",
            price: "$49",
            description: "A comprehensive news aggregation platform delivering real-time updates. Features include personalized feeds and offline reading capabilities.",
            features: ["Realtime Database", "Google auth", "Push Notifications",],
            link: "https://drive.google.com/drive/folders/10XhNifC86vt6cZF6sfT-gyd-3cpqzj9q?usp=sharing"
      }
];

const communityProjects = [
      {
            id: 1,
            title: "dartFlart",
            users: "Active on Pub.dev",
            description: "A robust Dart framework designedfor the web. Build stunning, responsive, and interactive web applications using the familiar declarative syntax of Flutter—all in 100% pure Dart. Flart bridges the gap between the power of web technologies (HTML/CSS/JS) and the developer experience of Flutter. Built for the community to accelerate Web development for Flutter Developers.",
            stars: "Official",
            link: "https://pub.dev/packages/flartdart"
      },
      {
            id: 2,
            title: "Nearlink",
            users: "Open Source",
            description: "NearLink is a Flutter-based mobile application designed for seamless communication on local networks. Whether you're in an office, at a remote campsite, or just want private communication without the internet, NearLink connects you directly to peers over Wi-Fi/LAN.",
            stars: "Drive",
            link: "https://drive.google.com/drive/folders/1vCHoVbxWPdjBdg6dc_wrACrVu48tLUr9?usp=sharing"
      },

      {
            id: 3,
            title: "TicTac-Toe",
            users: "Open Source",
            description: "A classic Tic-Tac-Toe game built with Flutter. This project is a fun, simple game that can be played by two players.",
            stars: "GitHub",
            link: "https://github.com/Heebu/tictactoe_1_0_8"
      },

      {
            id: 4,
            title: "Student API",
            users: "Open Source",
            description: "A Dart Frog backend providing access to Nigerian educational institutions data. made with dartfrog and deployed on dart globe",
            stars: "GitHub",
            link: "https://github.com/Heebu/undergraduate-api-main"
      }
];

const Marketplace = () => {
      const [activeTab, setActiveTab] = useState('marketplace');

      return (
            <section id="marketplace" className="marketplace-section">
                  <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                  >
                        Digital Storefront
                  </motion.h2>

                  <div className="tab-container">
                        <button
                              onClick={() => setActiveTab('marketplace')}
                              className={`tab-btn ${activeTab === 'marketplace' ? 'active' : ''}`}
                        >
                              <FiShoppingCart /> Apps for Sale
                        </button>
                        <button
                              onClick={() => setActiveTab('community')}
                              className={`tab-btn ${activeTab === 'community' ? 'active' : ''}`}
                        >
                              <FiUsers /> Community Projects
                        </button>
                  </div>

                  <div className="grid-container">
                        <AnimatePresence mode="wait">
                              {activeTab === 'marketplace' ? (
                                    <motion.div
                                          key="marketplace"
                                          className="marketplace-grid"
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: 20 }}
                                    >
                                          <div className="marketplace-grid-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                                                {marketplaceItems.map((item) => (
                                                      <div key={item.id} className="store-card">
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                                  <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem' }}>{item.title}</h3>
                                                                  <span className="price-tag">{item.price}</span>
                                                            </div>
                                                            <p style={{ margin: '1rem 0', color: 'var(--text-muted)' }}>{item.description}</p>
                                                            <ul className="feature-list">
                                                                  {item.features.map((f, i) => (
                                                                        <li key={i} className="feature-item">
                                                                              <FiCheckCircle style={{ color: 'var(--secondary-color)' }} /> {f}
                                                                        </li>
                                                                  ))}
                                                            </ul>
                                                            <a href={item.link} className="action-btn marketplace">
                                                                  Get License <FiArrowRight />
                                                            </a>
                                                      </div>
                                                ))}
                                          </div>
                                    </motion.div>
                              ) : (
                                    <motion.div
                                          key="community"
                                          className="community-grid"
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: 20 }}
                                    >
                                          <div className="community-grid-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                                                {communityProjects.map((item) => (
                                                      <div key={item.id} className="store-card">
                                                            <h3 style={{ color: 'var(--secondary-color)', fontSize: '1.4rem' }}>{item.title}</h3>
                                                            <p style={{ margin: '1rem 0', color: 'var(--text-muted)' }}>{item.description}</p>
                                                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                                                                  <span><FiUsers /> {item.users}</span>
                                                                  <span>⭐ {item.stars}</span>
                                                            </div>
                                                            <a href={item.link} className="action-btn community">
                                                                  View Source <FiGithubIcon />
                                                            </a>
                                                      </div>
                                                ))}
                                          </div>
                                    </motion.div>
                              )}
                        </AnimatePresence>
                  </div>
            </section>
      );
};

const FiGithubIcon = () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default Marketplace;
