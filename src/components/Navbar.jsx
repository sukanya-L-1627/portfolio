import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo">
                    <a href="#">L. SUKANYA<span></span></a>
                </div>

                <div className={`nav-links-wrapper ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={30} color="white" /> : <Menu size={30} color="white" />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
