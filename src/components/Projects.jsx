import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';
import emotionVideo from '../assets/Intent & Emotion Intelligence System.mp4';
import movieRecommendationVideo from '../assets/Movie_recommendation_System.mp4';
import churnVideo from '../assets/Customer_churn_intelligence_system.mp4';
import motoriqVideo from '../assets/MOTORIQ.mp4';
import tripiqVideo from '../assets/TripIQ.mp4';
import './Projects.css';

const Projects = () => {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, url: '', title: '', description: [], icon: '' });

    const openVideo = (url, title, description, icon) => {
        setModalConfig({ isOpen: true, url, title, description, icon });
    };

    const closeVideo = () => {
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const projectList = [
        {
            id: 1,
            title: "MotorIQ – Intelligent Condition Monitoring",
            domain: "Industrial IoT / Embedded AI",
            summary: "Real-time IoT system for monitoring machine health using ESP32 and industrial sensors.",
            icon: "⚡",
            description: [
                "Developed a real-time IoT system for monitoring machine health using ESP32, analyzing temperature, vibration, and RPM.",
                "Implemented intelligent rule-based logic to detect anomalies and trigger predictive alerts.",
                "Designed for reliable, low-cost industrial deployment with seamless hardware-software integration."
            ],
            tech: ["ESP32", "Embedded C", "Arduino", "Sensors", "IoT", "Hardware Integration"],
            video: motoriqVideo,
        },
        {
            id: 2,
            title: "TripIQ – Agentic AI Travel System",
            domain: "Agentic AI / Automation",
            summary: "Agent-driven AI travel system using MCP for autonomous planning and booking automation.",
            icon: "✈️",
            description: [
                "Built an agent-driven AI travel system using Model Context Protocol (MCP) for autonomous decision-making and execution.",
                "Automated the complete booking flow, including intelligent bus selection, hotel suggestions, and last-mile planning.",
                "Integrated real-time APIs to enable agents to analyze travel options and execute decisions based on user preferences."
            ],
            tech: ["Python", "MCP", "AI Agents", "Streamlit", "APIs"],
            video: tripiqVideo,
        },
        {
            id: 3,
            title: "CineSense– Movie discovery platform",
            domain: "Recommendation Systems",
            summary: "AI-powered movie discovery platform using hybrid filtering and association rule mining.",
            icon: "🎬",
            description: [
                "Designed a hybrid movie recommendation engine combining collaborative filtering and Apriori-based association mining.",
                "Integrated similarity scoring and normalized ranking to improve relevance under sparse data conditions.",
                "Delivered a Netflix-style interactive discovery interface."
            ],
            tech: ["Python", "Pandas", "Streamlit", "Apriori"],
            video: movieRecommendationVideo,
        },
        {
            id: 4,
            title: "Explainable Multi-Label Intent and Emotion Detection System",
            domain: "Natural Language Processing",
            summary: "Hybrid NLP system identifying user intent and emotional tone in customer support.",
            icon: "🧠",
            description: [
                "Developed a multi-label NLP system to detect user intent and emotional tone from text inputs.",
                "Implemented TF-IDF feature extraction with hybrid ML and rule-based logic.",
                "Built an interactive interface for real-time prediction testing."
            ],
            tech: ["NLP", "Scikit-learn", "Python", "Streamlit"],
            video: emotionVideo,
        },
        {
            id: 5,
            title: "Customer Churn Intelligence System",
            domain: "Customer Analytics / ML",
            summary: "End-to-end ML system predicting customer churn probability, timing, and risk factors.",
            icon: "👥",
            description: [
                "Built an end-to-end ML system predicting churn probability and timing using XGBoost and Random Forest.",
                "Integrated NLP-based sentiment analysis to quantify customer dissatisfaction from support logs.",
                "Engineered actionable insights and retention strategies based on feature importance and risk scoring."
            ],
            tech: ["Python", "XGBoost", "Random Forest", "NLP", "Scikit-learn", "Streamlit"],
            video: churnVideo,
        }
    ];

    return (
        <section id="portfolio" className="portfolio-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>My Projects</h2>
                    <p>Building intelligent, data-driven systems with a focus on Deep Learning, NLP, and scalable AI solutions.</p>
                </div>

                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={project.id}
                            className="project-compact-card"
                        >
                            <div className="project-header-top">
                                <span className="project-domain-badge">{project.domain}</span>
                            </div>

                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-summary">{project.summary}</p>

                            <div className="project-tech-minimal">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="tech-pill">{t}</span>
                                ))}
                            </div>

                            <div className="project-footer-demo">
                                <button
                                    onClick={() => openVideo(project.video, project.title, project.description, project.icon)}
                                    className="btn-demo-link-btn"
                                >
                                    <PlayCircle size={18} className="mr-2" />
                                    <span>Watch Video Demo</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <VideoModal
                isOpen={modalConfig.isOpen}
                onClose={closeVideo}
                videoUrl={modalConfig.url}
                title={modalConfig.title}
                description={modalConfig.description}
                icon={modalConfig.icon}
            />
        </section>
    );
};

export default Projects;
