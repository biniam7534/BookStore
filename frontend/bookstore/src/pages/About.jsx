import React from 'react';
import { FiAward, FiUsers, FiBookOpen, FiStar, FiTarget, FiEye } from 'react-icons/fi';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="about-title fade-in">
                        Crafting Literary <br />
                        <span className="accent">Futures</span>
                    </h1>
                    <div className="divider fade-in"></div>
                    <p className="about-subtitle fade-in">
                        Pioneering the next chapter in global storytelling. We bridge imagination with <br />
                        innovation through curated literary experiences.
                    </p>
                </div>
            </section>

            <section className="about-stats section-padding">
                <div className="container stats-grid">
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiAward className="stat-icon" />
                        </div>
                        <h2 className="stat-value">25K+</h2>
                        <p className="stat-name">Awards Won</p>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiUsers className="stat-icon" />
                        </div>
                        <h2 className="stat-value">1M+</h2>
                        <p className="stat-name">Active Readers</p>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiBookOpen className="stat-icon" />
                        </div>
                        <h2 className="stat-value">100K+</h2>
                        <p className="stat-name">Books Available</p>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-icon-wrapper">
                            <FiStar className="stat-icon" />
                        </div>
                        <h2 className="stat-value">4.9</h2>
                        <p className="stat-name">Average Rating</p>
                    </div>
                </div>
            </section>

            <section className="about-story section-padding">
                <div className="container story-grid">
                    <div className="story-image-container">
                        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000" alt="Bookstore" className="story-img" />
                        <div className="since-badge">
                            <h3>Since 2015</h3>
                            <p>Pioneering Digital Literature</p>
                        </div>
                    </div>
                    <div className="story-content">
                        <h2 className="story-title">Redefining Storytelling</h2>
                        <p className="story-desc">
                            We've transformed traditional publishing into a dynamic digital ecosystem...
                        </p>
                        <div className="mission-vision">
                            <div className="mv-card">
                                <div className="mv-icon"><FiEye /></div>
                                <div>
                                    <h3>Our Vision</h3>
                                    <p>Create a global network...</p>
                                </div>
                            </div>
                            <div className="mv-card">
                                <div className="mv-icon"><FiTarget /></div>
                                <div>
                                    <h3>Our Mission</h3>
                                    <p>Empower creators and inspire readers...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-team section-padding">
                <div className="container">
                    <h2 className="team-section-title">Meet Your Literary Guides</h2>
                    <div className="team-divider"></div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" alt="Sarah Johnson" />
                            </div>
                            <div className="member-info">
                                <h3>Sarah Johnson</h3>
                                <p>Head of Curation</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Michael Chen" />
                            </div>
                            <div className="member-info">
                                <h3>Michael Chen</h3>
                                <p>Creative Director</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" alt="Emma Williams" />
                            </div>
                            <div className="member-info">
                                <h3>Emma Williams</h3>
                                <p>Lead Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
