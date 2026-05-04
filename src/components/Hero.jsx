import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Phone, Download, PlayCircle, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import resumeFile from '../assets/L.Sukanya__Resume.pdf';
import './Hero.css';

const Hero = () => {
    const roles = ["ML Engineer", "Prompt Engineer", "Gen AI Engineer", "Agentic AI Developer"];
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
        <section id="home" className="hero-section">
            {/* Background Orbs */}
            <div className="bg-orb orb-1"></div>
            <div className="bg-orb orb-2"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="hero-name text-gradient"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Lambaday Sukanya
                        </motion.h1>
                        <motion.h2
                            className="hero-role"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <span className="role-text">{displayText}</span>
                            <span className="cursor-blink">|</span>
                        </motion.h2>
                        <motion.p
                            className="hero-desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Building intelligent, data-driven systems with a focus on
                            Deep Learning, NLP, and scalable AI solutions.
                        </motion.p>

                        <motion.div
                            className="hero-ctas"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <Download size={20} className="mr-2" /> View Resume
                            </a>
                            <a href="#contact" className="btn-secondary">Get in Touch</a>
                        </motion.div>

                        <motion.div
                            className="hero-social"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <a href="https://www.linkedin.com/in/sukanya27" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:sukanyal1627@gmail.com" className="social-icon">
                                <Mail size={24} />
                            </a>
                            <a href="tel:9491316259" className="social-icon">
                                <Phone size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="image-frame">
                            <img src={profilePic} alt="Sukanya" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
