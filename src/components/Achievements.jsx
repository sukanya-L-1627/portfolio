import { Trophy, Award, Star, ShieldCheck, GraduationCap, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
    const list = [
        {
            type: "Achievement",
            icon: <Trophy size={32} />,
            title: "Code Unnati Finalist",
            description: "Recognized as Finalist in Back-to-Back Years – TASK Code Unnati Innovation Marathon (SAP & Edunet, 2025 & 2026)"
        },
        {
            type: "Certification",
            icon: <ShieldCheck size={32} />,
            title: "OCI Data Science Professional",
            description: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional"
        },
        {
            type: "Certification",
            icon: <GraduationCap size={32} />,
            title: "Emerging Technologies",
            description: "Emerging Technologies Certification – SAP & Edunet Foundation"
        },
        {
            type: "Certification",
            icon: <Zap size={32} />,
            title: "LangChain Foundation",
            description: "Foundation: Introduction to LangChain – LangChain Academy"
        }
    ];

    return (
        <section id="achievements" className="achievements-section pt-20">
            <h2 className="section-title">Achievements & Certifications</h2>
            <div className="achievements-grid">
                {list.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index}
                        className="achievement-card glass-panel p-6"
                    >
                        <div className="achievement-icon text-accent mb-4">
                            {item.icon}
                        </div>
                        <span className="achievement-type text-secondary text-sm font-semibold tracking-wider uppercase">{item.type}</span>
                        <h3 className="achievement-title mt-2 font-bold text-lg mb-2">{item.title}</h3>
                        <p className="achievement-desc text-secondary leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
