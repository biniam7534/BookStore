import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo">
                        <div className="logo-icon">
                            <span className="icon-bar red"></span>
                            <span className="icon-bar blue"></span>
                            <span className="icon-bar yellow"></span>
                        </div>
                        <span className="logo-text">BOOKSHELL</span>
                    </div>
                    <p className="brand-pitch">
                        Providing the best books for your reading pleasure since 2026.
                        Join our community of book lovers and discover your next favorite read.
                    </p>
                    <div className="social-links">
                        <a href="https://web.facebook.com/profile.php?id=61566450134550&rdid=7weqg1LXRSZuQq3y&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F19o1jPRNpq%2F%3F_rdc%3D1%26_rdr#" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
                        <a href="https://www.linkedin.com/in/biniam-abu-a7a4b5395/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="https://www.instagram.com/30_bin/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                        <a href="https://github.com/biniam7534" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <div className="links-column">
                        <h4>Shop</h4>
                        <a href="/books">All Books</a>
                        <a href="/books?category=fiction">Fiction</a>
                        <a href="/books?category=non-fiction">Non-Fiction</a>
                        <a href="/books?category=kids">Kids</a>
                    </div>
                    <div className="links-column">
                        <h4>Company</h4>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact</a>
                        <a href="#">FAQ</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="links-column">
                        <h4>Account</h4>
                        <a href="/orders">My Orders</a>
                        <a href="#">Wishlist</a>
                        <a href="#">Profile</a>
                        <a href="#">Settings</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 BOOKSHELL. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
