import React from 'react';
import { motion } from 'framer-motion';
import { SiFlutter, SiReact, SiNodedotjs, SiJavascript, SiDart, SiFirebase, SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
  { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
];

const Skills = () => {
  return (
    <section id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Arsenal
      </motion.h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              borderColor: skill.color,
              boxShadow: `0 0 20px ${skill.color}44`
            }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: '1rem', marginTop: '0.5rem' }}>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
