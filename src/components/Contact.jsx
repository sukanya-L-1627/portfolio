import { Mail, Linkedin, Github, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section pt-20 pb-20">
            <h2 className="section-title">Contact Me</h2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="contact-container glass-panel p-12 text-center"
            >
                <h3 className="contact-subtitle mb-6 text-gradient">Let's Build Something Together</h3>
                <p className="contact-text mb-8">
                    I'm always open to discussing new projects, intelligent systems, or AI research opportunities.
                </p>

                <div className="contact-actions mb-8">
                    <a href="mailto:sukanyal1627@gmail.com" className="btn-primary">
                        <Mail size={20} className="mr-2" /> Email Me
                    </a>
                    <a href="https://wa.me/919491316259" target="_blank" rel="noopener noreferrer" className="btn-whatsapp ml-4">
                        <MessageCircle size={20} className="mr-2" /> WhatsApp
                    </a>
                    <a href="tel:9491316259" className="btn-secondary ml-4">
                        <Phone size={20} className="mr-2" /> Call Me
                    </a>
                </div>

                <div className="contact-socials">
                    <a href="https://www.linkedin.com/in/sukanya27" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={24} /></a>
                    <a href="https://github.com/sukanya-L-1627" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><Github size={24} /></a>
                </div>
            </motion.div>

            <footer className="footer-simple mt-20">
                <p>&copy; {new Date().getFullYear()} Lambaday Sukanya. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
