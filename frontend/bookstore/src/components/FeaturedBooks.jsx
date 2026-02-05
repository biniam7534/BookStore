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
    },
    [
        {
            id: 4,
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            description: "A groundbreaking exploration of how the mind works, revealing the biases, instincts, and hidden systems that shape human decision-making.",
            price: "199.00",
            rating: 5,
            bgColor: "#f2e6d8",
            image: "/src/assets/psychology1.png"
        },
        {
            id: 5,
            title: "The Future of the Mind",
            author: "Michio Kaku",
            description: "A futuristic journey into AI, neuroscience, and human potential, exploring how technology may redefine intelligence and consciousness.",
            price: "229.00",
            rating: 5,
            bgColor: "#d8ecf2",
            image: "/src/assets/image.png"
        },
        {
            id: 6,
            title: "Deep Work",
            author: "Cal Newport",
            description: "A practical blueprint for achieving elite focus in a distracted era, teaching how to produce high-value work with intense concentration.",
            price: "189.00",
            rating: 5,
            bgColor: "#e2f2d8",
            image: "/src/assets/productivity1.png"
        },
        {
            id: 7,
            title: "The Lean Startup",
            author: "Eric Ries",
            description: "A startup manifesto that redefines innovation, teaching how rapid experimentation builds scalable and resilient companies.",
            price: "215.00",
            rating: 5,
            bgColor: "#f2d8de",
            image: "/src/assets/startup1.png"
        },
        {
            id: 8,
            title: "Clean Code",
            author: "Robert C. Martin",
            description: "A developer’s handbook for writing readable, maintainable software, transforming the way engineers craft professional code.",
            price: "249.00",
            rating: 5,
            bgColor: "#d8f2ef",
            image: "/src/assets/programming1.png"
        },
        {
            id: 9,
            title: "You Don’t Know JS Yet",
            author: "Kyle Simpson",
            description: "A deep dive into modern JavaScript that sharpens technical thinking and builds mastery of the language powering the web.",
            price: "179.00",
            rating: 5,
            bgColor: "#f2efd8",
            image: "/src/assets/programming2.png"
        },
        {
            id: 10,
            title: "Make It Stick",
            author: "Peter C. Brown",
            description: "Science-backed strategies for learning smarter, helping readers build durable knowledge and long-term skill mastery.",
            price: "169.00",
            rating: 5,
            bgColor: "#e8d8f2",
            image: "/src/assets/learning1.png"
        },
        {
            id: 11,
            title: "Zero to One",
            author: "Peter Thiel",
            description: "A bold perspective on innovation and startups, teaching how to create unique value and build the future instead of copying the past.",
            price: "205.00",
            rating: 5,
            bgColor: "#d8e1f2",
            image: "/src/assets/startup2.png"
        }
    ]

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
