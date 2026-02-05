import React from 'react';
import { FiBookOpen, FiZap, FiTarget, FiHeart, FiCode, FiCompass } from 'react-icons/fi';
import './Categories.css';

const categories = [
    { id: 1, name: "Fiction", icon: <FiBookOpen />, color: "#fef2f2", textColor: "#ef4444" },
    { id: 2, name: "Science", icon: <FiZap />, color: "#eff6ff", textColor: "#3b82f6" },
    { id: 3, name: "Psychology", icon: <FiTarget />, color: "#f0fdf4", textColor: "#22c55e" },
    { id: 4, name: "Romance", icon: <FiHeart />, color: "#fdf2f8", textColor: "#ec4899" },
    { id: 5, name: "Technology", icon: <FiCode />, color: "#f5f3ff", textColor: "#8b5cf6" },
    { id: 6, name: "Travel", icon: <FiCompass />, color: "#fff7ed", textColor: "#f97316" },
];

const Categories = () => {
    return (
        <section className="categories-section">
            <div className="container">
                <div className="section-header centered">
                    <h2 className="section-title">Explore <span className="accent">Categories</span></h2>
                    <p className="section-subtitle">Find your next favorite genre</p>
                </div>

                <div className="categories-grid">
                    {categories.map(cat => (
                        <div key={cat.id} className="category-card" style={{ '--cat-bg': cat.color, '--cat-color': cat.textColor }}>
                            <div className="category-icon">{cat.icon}</div>
                            <h3 className="category-name">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
