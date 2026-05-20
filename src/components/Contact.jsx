import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="cta-area">
                    <h2>Have Any Project On Mind?</h2>
                    <a href="#" className="btn-pink">Hire Me</a>
                </div>

                <div className="contact-row">
                    <div className="contact-info">
                        <div className="info-item">
                            <MapPin size={30} className="text-pink" />
                            <div>
                                <h3>Location</h3>
                                <p>Hyderabad, India</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone size={30} className="text-pink" />
                            <div>
                                <h3>Phone</h3>
                                <p>+91 94913 16259</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={30} className="text-pink" />
                            <div>
                                <h3>Email</h3>
                                <p>sukanyal1627@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Message"></textarea>
                            <button type="submit" className="btn-pink">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
