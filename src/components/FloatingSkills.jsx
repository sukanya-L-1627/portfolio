import React from 'react';
import { motion } from 'framer-motion';
import './FloatingSkills.css';

const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    "https://openai.com/favicon.ico",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg",
    "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg",
];

const FloatingSkills = () => {
    // Generate random positions and animations for the icons
    const floatingIcons = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        icon: icons[i % icons.length],
        size: Math.random() * (45 - 20) + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * (30 - 20) + 20,
        delay: Math.random() * -20, // Start some animations immediately
        direction: Math.random() > 0.5 ? 1 : -1,
    }));

    return (
        <div className="floating-skills-container">
            {floatingIcons.map((item) => (
                <motion.img
                    key={item.id}
                    src={item.icon}
                    alt="Skill Icon"
                    className="floating-icon"
                    initial={{ 
                        x: `${item.x}vw`, 
                        y: `${item.y}vh`, 
                        opacity: 0,
                        rotate: 0,
                        scale: 0.8
                    }}
                    animate={{
                        y: [ `${item.y}vh`, `${item.y - 15 * item.direction}vh`, `${item.y}vh` ],
                        x: [ `${item.x}vw`, `${item.x + 10 * item.direction}vw`, `${item.x}vw` ],
                        opacity: [0.05, 0.15, 0.05],
                        rotate: [0, 360 * item.direction],
                        scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay,
                    }}
                    style={{
                        width: item.size,
                        height: item.size,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingSkills;
