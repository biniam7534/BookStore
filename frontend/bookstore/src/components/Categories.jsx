import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiStar, FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';
import './Categories.css';

const Categories = () => {
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books/favorites');
                setFavoriteBooks(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching favorites:', error);
                setLoading(false);
            }
        };

        fetchFavorites();
    }, []);

    const updateQty = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta)
        }));
    };

    if (loading) {
        return <div className="loading">Loading favorite books...</div>;
    }

    return (
        <section className="favorites-section">
            <div className="container">
                <div className="section-header centered">
                    <h2 className="section-title">Bookstore Favorites</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="favorites-grid">
                    {favoriteBooks.length > 0 ? (
                        favoriteBooks.map(book => (
                            <div key={book._id || book.id} className="favorite-card">
                                <div className="favorite-image-container">
                                    <img src={book.image} alt={book.title} className="favorite-image" />
                                    <div className="rating-pill">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                className={i < (book.rating || 5) ? "star-icon" : "star-icon empty"}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="favorite-info">
                                    <h3 className="favorite-title">{book.title}</h3>
                                    <p className="favorite-author"><span>{book.author}</span> best author in this week</p>
                                    <div className="favorite-price">ETB {typeof book.price === 'number' ? book.price.toFixed(1) : book.price}</div>

                                    {book.hasQty ? (
                                        <div className="quantity-selector">
                                            <button className="qty-btn" onClick={() => updateQty(book._id || book.id, -1)}><FiMinus /></button>
                                            <span className="qty-value">{quantities[book._id || book.id] || 1}</span>
                                            <button className="qty-btn" onClick={() => updateQty(book._id || book.id, 1)}><FiPlus /></button>
                                        </div>
                                    ) : (
                                        <button className="add-to-cart-btn">
                                            <FiShoppingCart /> Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-books">No favorite books found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Categories;
