import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Github, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-item footer-about">
                        <div className="footer-logo">
                            <a href="#">L. SUKANYA<span>.</span></a>
                        </div>
                        <p>
                            Dedicated AI/ML and Generative AI Engineer focused on building intelligent,
                            data-driven systems and scalable Machine Learning solutions.
                        </p>
                        <div className="footer-social">
                            <a href="mailto:sukanyal1627@gmail.com" aria-label="Email" className="social-link"><Mail size={20} /></a>
                            <a href="https://wa.me/919491316259" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link"><MessageCircle size={20} /></a>
                            <a href="https://www.linkedin.com/in/sukanya27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><Linkedin size={20} /></a>
                            <a href="https://github.com/sukanya-L-1627" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><Github size={20} /></a>
                            <a href="tel:9491316259" aria-label="Call" className="social-link"><Phone size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-item footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-item footer-contact">
                        <h3>Contact Info</h3>
                        <div className="contact-detail">
                            <MapPin size={18} className="text-pink" />
                            <span>Hyderabad, India</span>
                        </div>
                        <div className="contact-detail">
                            <Phone size={18} className="text-pink" />
                            <span>+91 94913 16259</span>
                        </div>
                        <div className="contact-detail">
                            <Mail size={18} className="text-pink" />
                            <span>sukanyal1627@gmail.com</span>
                        </div>
                    </div>

                    <div className="footer-item footer-newsletter">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter for latest updates.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your Email" />
                            <button type="submit" className="btn-pink">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} L. SUKANYA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
