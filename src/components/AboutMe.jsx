import '../App.css';
import {motion} from "framer-motion";

const AboutMe = () => {
    return (
        <section className="about-me">
            <motion.div 
                className="story-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="about-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}>
                    {`//`} About Me
                </motion.h2>

                <motion.div
                    className="story-section"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <span className="comment">{`/* WHO_AM_I */`}</span>
                    <p className="story-text">
                        I am a dedicated <span className="highlight">Software Engineer</span> with over 4 years of experience specializing in mobile and web development. 
                        My journey is defined by a passion for crafting robust, scalable applications that prioritize user experience and performance. 
                        I don't just write code; I engineer solutions that bridge the gap between complex technical requirements and intuitive user interfaces.
                    </p>
                </motion.div>

                <motion.div
                    className="story-section"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <span className="comment">{`/* TECH_STACK_EVOLUTION */`}</span>
                    <p className="story-text">
                        Starting with <span className="code">Flutter</span> and <span className="code">Dart</span>, I mastered the art of cross-platform mobile development, 
                        delivering seamless experiences for Android and iOS. Driven by relentless curiosity, I expanded my arsenal to include 
                        <span className="code"> React.js</span>, <span className="code"> Next.js</span>, and <span className="code"> Node.js</span>. 
                        This evolution has transformed me into a versatile developer capable of architecting comprehensive full-stack systems.
                    </p>
                </motion.div>

                <motion.div
                    className="story-section"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="comment">{`/* CURRENT_MISSION */`}</span>
                    <p className="story-text">
                        I thrive in challenging environments where I can apply engineering principles to solve real-world problems. 
                        My focus is on writing clean, maintainable code and staying ahead of the curve with emerging technologies. 
                        I am currently seeking opportunities to leverage my diverse skill set to build the next generation of digital products.
                    </p>
                </motion.div>

                <motion.div
                    className="hacker-effect"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-color)' }}
                >
                    {`//`} Status: <span className="highlight">Ready to Deploy</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
