import '../App.css';
import {motion} from "framer-motion";

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="story-container">
                <motion.h2
                    className="about-title"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    {`//`} About Me
                </motion.h2>

                <motion.p
                    className="story-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <span className="comment">{`//`} Hi, I’m Idris Adedeji...</span>
                    <br /> <span className="code">const journey = "Flutter Developer for 2+ years";</span>
                </motion.p>

                <motion.p
                    className="story-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <span className="comment">{`//`} But curiosity drove me to...</span>
                    <br /> <span className="code">const skillSet = ["Mobile Apps", "Web Development"];</span>
                </motion.p>

                <motion.p
                    className="story-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="comment">{`//`} Now diving into React and Next.js...</span>
                    <br /> <span className="code">const future = "Full-stack Developer";</span>
                </motion.p>

                <motion.div
                    className="hacker-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    {`//`} Passion-driven, code-first mindset: <span className="highlight">Hack the Future</span>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
