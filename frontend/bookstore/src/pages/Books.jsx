import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books');
                setBooks(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="loading">Loading books...</div>;
    }

    return (
        <div className="books-page">
            <section className="books-header section-padding">
                <div className="container">
                    <h1 className="books-title fade-in">Literary Universe</h1>
                    <p className="books-subtitle fade-in">Explore our curated collection spanning genres and perspectives</p>

                    <div className="books-controls fade-in">
                        <div className="search-bar-wrapper">
                            <FiSearch className="search-bar-icon" />
                            <input
                                type="text"
                                placeholder="Search titles, authors..."
                                className="books-search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="filters-row">
                            <div className="filter-dropdowns">
                                <div className="dropdown">
                                    <span>All Genres</span>
                                    <FiChevronDown />
                                </div>
                                <div className="dropdown">
                                    <span>Sort by Title</span>
                                    <FiChevronDown />
                                </div>
                            </div>
                            <div className="results-count">
                                Showing {filteredBooks.length} results
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="books-grid-section container">
                <div className="books-grid">
                    {filteredBooks.map(book => (
                        <div key={book._id || book.id} className="book-card scale-in">
                            <div className="book-image">
                                <img src={book.image} alt={book.title} />
                                <div className="book-overlay">
                                    <button className="view-details-btn">View Details</button>
                                </div>
                            </div>
                            <div className="book-info">
                                <span className="book-category">{book.category}</span>
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Books;
