import React from 'react';
import { FiSend } from 'react-icons/fi';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="newsletter-card">
                    <div className="newsletter-content">
                        <h2 className="newsletter-title">Join Our Reader's <span className="highlight">Community</span></h2>
                        <p className="newsletter-desc">
                            Subscribe to get notified about new arrivals,
                            exclusive discounts, and literary events.
                        </p>
                    </div>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-btn">
                            <FiSend /> Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
