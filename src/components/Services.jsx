import React from 'react';
import { Brain, Cpu, MessageSquare, Database, Bot, LineChart } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Generative AI Solutions",
            desc: "Designing and deploying custom LLM-based solutions, fine-tuning models, and prompt engineering.",
            icon: <Brain size={40} className="text-pink" />
        },
        {
            title: "LLM & RAG Pipelines",
            desc: "Building advanced Retrieval-Augmented Generation (RAG) systems for knowledge retrieval and intelligent chat.",
            icon: <MessageSquare size={40} className="text-pink" />
        },
        {
            title: "Machine Learning Modeling",
            desc: "Developing predictive models, classification systems, and regression analysis using Scikit-Learn and XGBoost.",
            icon: <Cpu size={40} className="text-pink" />
        },
        {
            title: "NLP & Text Analytics",
            desc: "Implementing sentiment analysis, intent detection, and entity recognition systems for unstructured data.",
            icon: <Bot size={40} className="text-pink" />
        },
        {
            title: "AI Agent Development",
            desc: "Creating autonomous agents using LangChain and AutoGPT for automated reasoning and execution.",
            icon: <Database size={40} className="text-pink" />
        },
        {
            title: "Data Engineering & Viz",
            desc: "Architecting data pipelines and creating interactive dashboards with Power BI and Streamlit.",
            icon: <LineChart size={40} className="text-pink" />
        }
    ];

    return (
        <section id="services" className="services-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>We provide a wide range of services to help you grow your business.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
