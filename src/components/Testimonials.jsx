import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Working with Yara was a fantastic experience. Her attention to detail and creative approach to design resulted in a website that exceeded our expectations.",
            name: "John Doe",
            position: "CEO, Tech Corp"
        },
        {
            text: "Yara is a highly skilled developer who delivered our project on time and within budget. Her expertise in React was evident throughout the process.",
            name: "Jane Smith",
            position: "Marketing Manager, Creative Agency"
        },
        {
            text: "I highly recommend Yara for any web design or development project. She is professional, responsive, and a pleasure to work with.",
            name: "Mike Johnson",
            position: "Founder, Startup Inc"
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Testimonials</h2>
                    <p>What our clients say about us.</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <Quote size={40} className="text-pink mb-4" />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <h4>{t.name}</h4>
                                <p>{t.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
