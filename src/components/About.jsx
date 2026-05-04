import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const DevIcon = ({ src, alt, className = "" }) => (
    <img src={src} alt={alt} width={36} height={36} className={className} style={{ objectFit: 'contain' }} />
);

const About = () => {
    const skillCategories = [
        {
            name: "Python",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />,
            desc: "Expert in AI scripting, automation, and model development."
        },
        {
            name: "PyTorch",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />,
            desc: "Training deep learning models and custom neural networks."
        },
        {
            name: "TensorFlow",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />,
            desc: "End-to-end ML workflows and GenAI applications."
        },
        {
            name: "Hugging Face",
            icon: <DevIcon src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" />,
            desc: "Transformers, fine-tuning, and model deployment."
        },
        {
            name: "LangChain",
            icon: <DevIcon src="https://avatars.githubusercontent.com/u/126733545?s=200&v=4" alt="LangChain" />,
            desc: "Building agents, tools, and RAG pipelines."
        },
        {
            name: "OpenAI APIs",
            icon: <DevIcon src="https://openai.com/favicon.ico" alt="OpenAI" />,
            desc: "GPT integration for embeddings and chatbots."
        },
        {
            name: "Prompt Engineering",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" alt="Prompt Engineering" />,
            desc: "Designing effective prompts for zero-shot and CoT tasks."
        },
        {
            name: "Streamlit",
            icon: <DevIcon src="https://streamlit.io/images/brand/streamlit-mark-color.svg" alt="Streamlit" />,
            desc: "Deploying interactive AI prototypes quickly."
        },
        {
            name: "FastAPI",
            icon: <DevIcon src="https://raw.githubusercontent.com/fastapi/fastapi/master/docs/en/docs/img/logo-margin/logo-teal.svg" alt="FastAPI" />,
            desc: "Serving models with high-performance APIs."
        },
        {
            name: "Agentic AI",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/4712/4712139.png" alt="Agentic AI" />,
            desc: "Developing autonomous AI agents and workflows."
        },
        {
            name: "Gen AI & RAG",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" alt="Gen AI" />,
            desc: "Retrieval-Augmented Generation and Large Language Models."
        },
        {
            name: "NLP",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/2103/2103507.png" alt="NLP" />,
            desc: "Natural Language Processing and Text Analytics."
        },
        {
            name: "Machine Learning",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" />,
            desc: "Supervised, Unsupervised, and Statistical Modeling."
        },
        {
            name: "Data Analytics",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />,
            desc: "Exploratory Data Analysis using Pandas & NumPy."
        },
        {
            name: "Power BI",
            icon: <DevIcon src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" />,
            desc: "Business Intelligence and Data Visualization."
        },
        {
            name: "SQL & Databases",
            icon: <DevIcon src="https://www.svgrepo.com/show/331760/sql-database-generic.svg" alt="SQL" />,
            desc: "Managing data with MySQL and relational databases."
        },
        {
            name: "React & JS",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />,
            desc: "Building modern frontend applications."
        },
        {
            name: "Git & GitHub",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon-white" />,
            desc: "Version control and collaborative development."
        },
        {
            name: "MLOps",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/8618/8618881.png" alt="MLOps" />,
            desc: "Managing the lifecycle of ML models."
        }
    ];

    return (
        <section id="about" className="about-section pt-20">
            <h2 className="section-title">About Me</h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="about-container glass-panel p-6 mb-12"
            >
                <div className="about-content">
                    <p>
                        I am an AI and Machine Learning developer driven by curiosity, structured thinking, and a strong desire to build intelligent systems that solve real-world problems. I enjoy breaking down complex challenges into logical components and designing solutions that are both technically sound and practically meaningful.
                    </p>
                    <p>
                        My interest in data-driven roles developed from a deeper fascination with how systems process information and make decisions. I have always been drawn to understanding the flow of inputs, transformations, and outputs — whether in physical systems or computational models. Over time, I realized that data is the foundation of modern intelligent systems, and the ability to extract insight from it is what creates true impact.
                    </p>
                    <p>
                        Today, I focus on building structured, interpretable, and performance-driven AI solutions that deliver measurable value in real-world environments. My goal is to contribute to teams that engineer intelligent systems capable of making smarter, data-informed decisions.
                    </p>
                </div>
            </motion.div>




            <h2 id="skills" className="section-title skills-title">Skill Set</h2>
            <div className="skills-grid">
                {skillCategories.map((skill, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        key={index}
                        className="skill-card glass-panel"
                    >
                        <div className="skill-icon-container">
                            {skill.icon}
                        </div>
                        <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <p className="skill-desc">{skill.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
