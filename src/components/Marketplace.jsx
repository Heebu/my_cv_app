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
            title: "SaaS Starter Kit",
            price: "$49",
            description: "A complete Flutter & Node.js boilerplate for rapid SaaS development.",
            features: ["Stripe Integration", "Auth Flow", "Push Notifications"],
            link: "#"
      },
      {
            id: 2,
            title: "E-commerce Pro",
            price: "$89",
            description: "Ready-to-deploy multi-vendor marketplace app with admin panel.",
            features: ["Cart System", "Vendor Dash", "Order Tracking"],
            link: "#"
      }
];

const communityProjects = [
      {
            id: 1,
            title: "Dart Utils Lib",
            users: "500+",
            description: "A collection of essential Dart extensions for Flutter developers.",
            stars: 120,
            link: "https://github.com/heebu"
      },
      {
            id: 2,
            title: "UI Design System",
            users: "200+",
            description: "Figma to React component library for futuristic dashboards.",
            stars: 85,
            link: "https://github.com/heebu"
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

                  <div className="tab-container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
                        <button
                              onClick={() => setActiveTab('marketplace')}
                              className={`tab-btn ${activeTab === 'marketplace' ? 'active' : ''}`}
                              style={tabButtonStyle(activeTab === 'marketplace')}
                        >
                              <FiShoppingCart /> Apps for Sale
                        </button>
                        <button
                              onClick={() => setActiveTab('community')}
                              className={`tab-btn ${activeTab === 'community' ? 'active' : ''}`}
                              style={tabButtonStyle(activeTab === 'community')}
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
                                          style={gridStyle}
                                    >
                                          {marketplaceItems.map((item) => (
                                                <div key={item.id} className="store-card" style={cardStyle}>
                                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem' }}>{item.title}</h3>
                                                            <span style={{ background: 'var(--primary-color)', color: '#000', padding: '0.2rem 0.8rem', borderRadius: '12px', fontWeight: '800' }}>{item.price}</span>
                                                      </div>
                                                      <p style={{ margin: '1rem 0', color: 'var(--text-muted)' }}>{item.description}</p>
                                                      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                                            {item.features.map((f, i) => (
                                                                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                                                                        <FiCheckCircle style={{ color: 'var(--secondary-color)' }} /> {f}
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                      <a href={item.link} className="buy-btn" style={actionButtonStyle('#00f3ff')}>
                                                            Get License <FiArrowRight />
                                                      </a>
                                                </div>
                                          ))}
                                    </motion.div>
                              ) : (
                                    <motion.div
                                          key="community"
                                          className="community-grid"
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: 20 }}
                                          style={gridStyle}
                                    >
                                          {communityProjects.map((item) => (
                                                <div key={item.id} className="store-card" style={cardStyle}>
                                                      <h3 style={{ color: 'var(--secondary-color)', fontSize: '1.4rem' }}>{item.title}</h3>
                                                      <p style={{ margin: '1rem 0', color: 'var(--text-muted)' }}>{item.description}</p>
                                                      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                                                            <span><FiUsers /> {item.users} Users</span>
                                                            <span>⭐ {item.stars} Stars</span>
                                                      </div>
                                                      <a href={item.link} className="source-btn" style={actionButtonStyle('#bc13fe')}>
                                                            View Source <FiGithubIcon />
                                                      </a>
                                                </div>
                                          ))}
                                    </motion.div>
                              )}
                        </AnimatePresence>
                  </div>
            </section>
      );
};

// --- Inlined Styles Helper ---
const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1000px',
      margin: '0 auto'
};

const cardStyle = {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      padding: '2rem',
      backdropFilter: 'blur(10px)',
      transition: 'transform 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
};

const tabButtonStyle = (isActive) => ({
      padding: '1rem 2rem',
      borderRadius: '50px',
      background: isActive ? 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))' : 'transparent',
      color: isActive ? '#fff' : 'var(--text-muted)',
      border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      transition: 'all 0.3s ease'
});

const actionButtonStyle = (color) => ({
      marginTop: 'auto',
      padding: '1rem',
      borderRadius: '12px',
      textDecoration: 'none',
      textAlign: 'center',
      color: '#fff',
      background: `linear-gradient(45deg, ${color}33, transparent)`,
      border: `1px solid ${color}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.8rem',
      fontWeight: '600',
      transition: 'all 0.3s ease'
});

const FiGithubIcon = () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default Marketplace;
