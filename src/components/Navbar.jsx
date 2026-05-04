import React, { useState, useEffect } from 'react';
import resumeFile from '../assets/L.Sukanya__Resume.pdf';
import './Navbar.css';

import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="nav-container">
                <div className="nav-brand text-gradient">L. Sukanya</div>
                <div className="nav-menu">
                    <ul className="nav-links">
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                    <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn-resume">
                        Resume
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
