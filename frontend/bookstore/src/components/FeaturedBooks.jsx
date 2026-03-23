import React from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiShoppingCart } from 'react-icons/fi';
import './FeaturedBooks.css';

import book1Img from '../assets/download.png'; // Correct book cover for Twilight Fortress
import book2Img from '../assets/hacker3).png';
import book3Img from '../assets/HB3.png';
import book4Img from '../assets/feker_esk_makaber.jpg';
import book5Img from '../assets/millioner.png';
import book6Img from '../assets/cutting for stone.jpg';

// Mock data based on the latest image provided
const featuredBooks = [
    {
        id: 1,
        title: "The Sigma Male Bible: An Ultimate Guide To The Lone Wolf",
        author: "Bud Watson",
        description: "A guide exploring the Sigma male personality type, focusing on independence, self-reliance, and confidence outside traditional social hierarchies.",
        price: "190.99",
        rating: 5,
        bgColor: "#dae9f2", // Light blue
        image: book1Img
    },
    {
        id: 2,
        title: "Building Real-World Hacker Skills from Scratch",
        author: "Kline Thornton",
        description: "A practical beginner-friendly guide to cybersecurity that focuses on hands-on learning. It teaches penetration testing, Wi-Fi hacking, Linux, and scripting using Python, Bash, and PowerShell while helping readers build real-world hacker skills.",
        price: "220.99",
        rating: 5,
        bgColor: "#fef3d5", // Light yellow/orange
        image: book2Img
    },
    {
        id: 3,
        title: "Mystic River",
        author: "Dennis Lehane",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: "182.99",
        rating: 5,
        bgColor: "#e2f2d5", // Light green
        image: book3Img
    },
    {
        id: 4,
        title: "ፍቅር እስከ መቃብር",
        author: "ሀዲስ አለማየሁ",
        description: "A legendary Ethiopian novel exploring love, class struggle, and destiny in Addis Ababa society.",
        price: "180.00",
        rating: 5,
        bgColor: "#f2e6d8",
        image: book4Img
    },
    {
        id: 5,
        title: "The Millionaire Booklet: How to Get Super Rich",
        author: "Grant Cardone",
        description: "A short, powerful guide that simplifies wealth creation into actionable steps. It focuses on mindset, increasing income, and building multiple streams of revenue to achieve financial success.",
        price: "215.00",
        rating: 5,
        bgColor: "#ebdcf2", // Light purple
        image: book5Img
    },
    {
        id: 6,
        title: "Cutting for Stone",
        author: "Abraham Verghese",
        description: "A sweeping saga of twin brothers born from a secret union between an Indian nun and a British surgeon in Ethiopia.",
        price: "199.00",
        rating: 5,
        bgColor: "#f2f7d5",
        image: book6Img
    }
];

const FeaturedBooks = () => {
    const sliderRef = React.useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="featured-section">
            <div className="container">
                <div className="section-header">
                    <div className="title-group">
                        <h2 className="section-title">Curated <span className="accent">Excellence</span></h2>
                        <p className="section-subtitle">Top Rated by Our Readers</p>
                    </div>
                    <div className="slider-controls">
                        <button className="control-btn" onClick={() => scroll('left')}><FiChevronLeft /></button>
                        <button className="control-btn" onClick={() => scroll('right')}><FiChevronRight /></button>
                    </div>
                </div>

                <div className="books-slider" ref={sliderRef}>
                    {featuredBooks.map(book => (
                        <div
                            key={book.id}
                            className="featured-card"
                            style={{ backgroundColor: book.bgColor }}
                        >
                            <div className="card-top">
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className="star-icon"
                                        />
                                    ))}
                                </div>
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                                <p className="book-description">{book.description}</p>
                            </div>

                            <div className="card-bottom">
                                <div className="price-row">
                                    <span className="price">ETB {book.price}</span>
                                </div>
                                <div className="action-row">
                                    <button className="add-to-collection">
                                        <FiShoppingCart /> Add to Collection
                                    </button>
                                </div>
                                <div className="book-image-frame">
                                    <img src={`${book.image}?t=${new Date().getTime()}`} alt={book.title} className="book-img-inner" />
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
