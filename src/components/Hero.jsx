import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import cleanPortrait from 'C:/Users/HP/.gemini/antigravity/brain/ba405f00-f8b3-4f4e-a591-cf8a78088972/sukanya_professional_portrait_clean_1778955233746.png';
import resume from '../assets/L.Sukanya__Resume.pdf';
import './Hero.css';

const Hero = () => {
    const roles = ["Web Designer", "Front-end Developer", "UI/UX Designer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = roles[currentRoleIndex];

            if (isDeleting) {
                setDisplayText(prev => prev.substring(0, prev.length - 1));
                setTypingSpeed(50);
            } else {
                setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && displayText === currentFullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

    return (
        <section id="home" className="hero-section hero-sinau-style">
            <div className="container">
                <div className="hero-row">
                    <motion.div
                        className="hero-content-sinau"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="sinau-heading">
                            Your Vision,<span>My Innovation</span>
                            <br />

                        </h1>
                        <p className="sinau-desc">
                            Passionate AI/ML Engineer dedicated to building intelligent,
                            data-driven systems. Specializing in Large Language Models (LLMs),
                            RAG architectures, and scalable Machine Learning pipelines.
                        </p>
                        <div className="sinau-btns">
                            <a href="#contact" className="btn-pink">HIRE ME</a>
                            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-outline ml-3">VIEW RESUME</a>
                        </div>

                    </motion.div>

                    <motion.div
                        className="hero-image-sinau"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="sinau-img-wrapper">
                            <div className="pink-circle-bg"></div>
                            <div className="portrait-container">
                                <img src={profilePic} alt="Sukanya" />
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                className="sinau-badge badge-top"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="badge-icon">🤖</div>
                                <div className="badge-info">
                                    <h4>10+</h4>
                                    <p>AI Agents</p>
                                    <p>Enthusiast</p>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
