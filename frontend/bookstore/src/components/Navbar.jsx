import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiInfo, FiBook, FiMail, FiPackage } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="logo">
                    <div className="logo-icon">
                        <span className="icon-bar red"></span>
                        <span className="icon-bar blue"></span>
                        <span className="icon-bar yellow"></span>
                    </div>
                    <span className="logo-text">BOOKSHELL</span>
                </div>

                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        <FiInfo className="link-icon" /> About
                    </NavLink>
                    <NavLink to="/books" className="nav-link">
                        <FiBook className="link-icon" /> Books
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        <FiMail className="link-icon" /> Contact
                    </NavLink>
                    <NavLink to="/orders" className="nav-link">
                        <FiPackage className="link-icon" /> My Orders
                    </NavLink>
                </div>

                <div className="nav-actions">
                    <button className="icon-btn cart-btn">
                        <FiShoppingCart />
                        <span className="cart-badge">0</span>
                    </button>
                    <button className="icon-btn profile-btn">
                        <FiUser />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
