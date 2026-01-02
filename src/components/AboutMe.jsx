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
                    className="story-line"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <span className="comment">{`//`} Hi, I’m Idris Adedeji...</span>
                    <br /> <span className="code">const journey = "Flutter Developer for 4+ years";</span>
                </motion.div>

                <motion.div
                    className="story-line"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <span className="comment">{`//`} But curiosity drove me to...</span>
                    <br /> <span className="code">const skillSet = ["Mobile Apps", "Web Development"];</span>
                </motion.div>

                <motion.div
                    className="story-line"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="comment">{`//`} Now diving into React and Next.js...</span>
                    <br /> <span className="code">const future = "Full-stack Developer";</span>
                </motion.div>

                <motion.div
                    className="hacker-effect"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-color)' }}
                >
                    {`//`} Passion-driven, code-first mindset: <span className="highlight">Hack the Future</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
