import React, { useState } from 'react';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';
import './Books.css';

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const books = [
        {
            id: 1,
            title: "Literary Foundations",
            author: "Stacker",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
            category: "Classic"
        },
        {
            id: 2,
            title: "How Innovation Works",
            author: "Matt Ridley",
            image: "https://m.media-amazon.com/images/I/81L6E0BOH3L.jpg",
            category: "Business"
        },
        {
            id: 3,
            title: "Emma Elliot",
            author: "Author Name",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
            category: "Fiction"
        },
        {
            id: 4,
            title: "Pages of Time",
            author: "History Maker",
            image: "https://images.unsplash.com/photo-1476275466078-402737450400?auto=format&fit=crop&q=80&w=400",
            category: "History"
        },
        {
            id: 5,
            title: "Modern Design",
            author: "Creative Mind",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
            category: "Art"
        },
        {
            id: 6,
            title: "Future Tech",
            author: "AI Explorer",
            image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=400",
            category: "Technology"
        },
        {
            id: 7,
            title: "Nature's Whispers",
            author: "Eco Warrior",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
            category: "Science"
        },
        {
            id: 8,
            title: "The Art of War",
            author: "Sun Tzu",
            image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
            category: "Strategy"
        }
    ];

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
                                Showing 16 results
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="books-grid-section container">
                <div className="books-grid">
                    {books.map(book => (
                        <div key={book.id} className="book-card scale-in">
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
