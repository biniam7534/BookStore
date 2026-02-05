import React from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiShoppingCart } from 'react-icons/fi';
import './FeaturedBooks.css';

// Mock data based on the latest image provided
const featuredBooks = [
    {
        id: 1,
        title: "Mystic River",
        author: "Dennis Lehane",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: "182.99",
        rating: 5,
        bgColor: "#fee2d5", // Light orange
        image: "/src/assets/HA1.png"
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: "166.00",
        rating: 5,
        bgColor: "#e2f2d5", // Light green
        image: "/src/assets/HB1.png"
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: "209.00",
        rating: 5,
        bgColor: "#ebdcf2", // Light purple
        image: "/src/assets/HA2.png"
    },
    {
        id: 4,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: "210.00",
        rating: 4,
        bgColor: "#f2f7d5", // Light yellow-green
        image: "/src/assets/HA3.png"
    }
];

const FeaturedBooks = () => {
    return (
        <section className="featured-section">
            <div className="container">
                <div className="section-header">
                    <div className="title-group">
                        <h2 className="section-title">Curated <span className="accent">Excellence</span></h2>
                        <p className="section-subtitle">Top Rated by Our Readers</p>
                    </div>
                </div>

                <div className="books-grid">
                    {featuredBooks.map(book => (
                        <div
                            key={book.id}
                            className="book-card"
                            style={{ backgroundColor: book.bgColor }}
                        >
                            <div className="card-top">
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className={i < Math.floor(book.rating) ? "star-icon filled" : "star-icon"}
                                        />
                                    ))}
                                </div>
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                                <p className="book-description">{book.description}</p>
                            </div>

                            <div className="card-bottom">
                                <div className="price-row">
                                    <span className="price">₹{book.price}</span>
                                </div>
                                <div className="action-row">
                                    <button className="add-to-collection">
                                        <FiShoppingCart /> Add to Collection
                                    </button>
                                </div>
                                <div className="book-image-frame">
                                    <img src={book.image} alt={book.title} className="book-img-inner" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedBooks;
