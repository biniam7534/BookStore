import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FiChevronLeft, FiChevronRight, FiStar, FiShoppingCart } from 'react-icons/fi';
import './FeaturedBooks.css';

const FeaturedBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books/featured');
                setBooks(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (loading) {
        return <div className="loading">Loading featured books...</div>;
    }

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
                    {books.length > 0 ? (
                        books.map(book => (
                            <div
                                key={book._id || book.id}
                                className="featured-card"
                                style={{ backgroundColor: book.bgColor }}
                            >
                                <div className="card-top">
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                className="star-icon"
                                                fill={i < (book.rating || 5) ? "currentColor" : "none"}
                                            />
                                        ))}
                                    </div>
                                    <h3 className="book-title">{book.title}</h3>
                                    <p className="book-author">{book.author}</p>
                                    <p className="book-description">{book.description}</p>
                                </div>

                                <div className="card-bottom">
                                    <div className="price-row">
                                        <span className="price">ETB {typeof book.price === 'number' ? book.price.toFixed(2) : book.price}</span>
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
                        ))
                    ) : (
                        <p className="no-books">No featured books found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FeaturedBooks;
