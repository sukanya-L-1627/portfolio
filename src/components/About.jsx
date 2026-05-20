import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import resume from '../assets/L.Sukanya__Resume.pdf';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-row">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-frame-wrapper">
                            <div className="about-pink-splash"></div>
                            <div className="about-main-img">
                                <img src={profilePic} alt="Sukanya" />
                                <div className="about-exp-badge">
                                    <span className="about-exp-num">AI/ML</span>
                                    <span className="about-exp-text">Engineer</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-title-line"></div>
                        <h2 className="about-title">Introduction About Me</h2>
                        <p>
                            I am a passionate AI/ML and Generative AI Engineer dedicated to building intelligent,
                            data-driven systems and scalable Machine Learning solutions.
                        </p>
                        <p>
                            My expertise lies in orchestrating Large Language Models, developing RAG architectures,
                            and fine-tuning deep learning models to solve complex real-world challenges.
                        </p>
                        <div className="about-btns-row">
                            <a href="#contact" className="btn-pink">HIRE ME</a>
                            <a href={resume} download="L.Sukanya_Resume.pdf" className="btn-outline ml-3">DOWNLOAD CV</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
