import React from 'react';
import profilePic from '../assets/profile.jpg'; // Placeholder for blog thumbnails
import './Blog.css';

const Blog = () => {
    const posts = [
        {
            title: "10 Tips for Modern Web Design",
            date: "May 15, 2026",
            image: profilePic
        },
        {
            title: "How to Optimize Your Website for SEO",
            date: "May 10, 2026",
            image: profilePic
        },
        {
            title: "The Future of Web Development",
            date: "May 5, 2026",
            image: profilePic
        }
    ];

    return (
        <section id="blog" className="blog-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Latest Blog</h2>
                    <p>Read our latest articles and news.</p>
                </div>
                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="blog-item">
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                                <div className="blog-date">{post.date}</div>
                            </div>
                            <div className="blog-content">
                                <h3><a href="#">{post.title}</a></h3>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
