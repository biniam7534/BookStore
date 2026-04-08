import React from 'react';
import { FiSend } from 'react-icons/fi';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = React.useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail('');
        }
    };

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
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="newsletter-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
