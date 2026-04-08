import React, { useState } from 'react';
import { FiArrowLeft, FiMapPin, FiCreditCard } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, clearCart } = useCart();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        state: '',
        zip: '',
        paymentMethod: 'Cash on Delivery'
    });

    const subtotal = cartItems.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
    const tax = subtotal * 0.15;
    const totalAmount = subtotal + tax;

    if (cartItems.length === 0) {
        return (
            <div className="checkout-empty fade-in" style={{ textAlign: "center", padding: "100px 20px" }}>
                <h2>Your cart is empty</h2>
                <button className="continue-shopping-btn" onClick={() => navigate('/books')}>
                    Browse Books
                </button>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        try {
            const orderData = {
                orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
                date: new Date().toISOString().split('T')[0],
                amount: totalAmount.toFixed(2),
                payment: formData.paymentMethod,
                status: "Processing",
                customerDetails: formData,
                items: cartItems.map(item => ({
                    title: item.title,
                    author: item.author,
                    price: item.price || 0,
                    quantity: item.quantity,
                })),
            };
            const response = await axios.post("http://localhost:5555/api/orders", orderData);
            if (response.status === 201) {
                clearCart();
                navigate('/order-success', { state: { orderData } });
            }
        } catch (error) {
            console.error("Error creating order", error);
            alert("Failed to place order. Please try again.");
        }
    };

    return (
        <div className="checkout-page">
            <div className="container" style={{ paddingBottom: '20px' }}>
                <button className="back-btn" onClick={() => navigate('/cart')}>
                    <FiArrowLeft /> Back to Cart
                </button>
            </div>
            <div className="checkout-container container fade-in">
                <div className="checkout-form-section">
                    <h2 className="checkout-title">Checkout Details</h2>
                    <p className="checkout-subtitle">Please enter your information to complete the order</p>

                    <form className="checkout-form" onSubmit={handlePlaceOrder}>
                        <div className="form-section-title">
                            <FiMapPin /> Shipping Address
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: "20px" }}>
                            <label>Street Address</label>
                            <input type="text" name="address" required value={formData.address} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" name="state" required value={formData.state} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>ZIP Code</label>
                                <input type="text" name="zip" required value={formData.zip} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-section-title mt-4">
                            <FiCreditCard /> Payment Method
                        </div>

                        <div className="payment-options">
                            <div
                                className={`payment-method ${formData.paymentMethod === 'Cash on Delivery' ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, paymentMethod: 'Cash on Delivery' })}
                            >
                                <div className="payment-title" style={{ color: formData.paymentMethod === 'Cash on Delivery' ? '#eab308' : '' }}>
                                    $ Cash on Delivery
                                </div>
                                <div className="payment-desc">Pay when you receive the order</div>
                            </div>
                            <div
                                className={`payment-method ${formData.paymentMethod === 'Online Payment' ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, paymentMethod: 'Online Payment' })}
                            >
                                <div className="payment-title" style={{ color: formData.paymentMethod === 'Online Payment' ? '#a855f7' : '' }}>
                                    💳 Online Payment
                                </div>
                                <div className="payment-desc">Pay with credit/debit card</div>
                            </div>
                        </div>

                        <button type="submit" className="place-order-btn">Place Order</button>
                    </form>
                </div>

                <div className="checkout-summary-section">
                    <h2 className="summary-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', color: '#1e293b', marginBottom: '20px' }}>
                        🛒 Order Summary
                    </h2>
                    <div className="summary-items">
                        <div className="summary-subtitle">Your Items</div>
                        {cartItems.map(item => (
                            <div key={item.id || item._id} className="summary-item">
                                <img src={item.image} alt={item.title} className="summary-img" />
                                <div className="summary-item-details">
                                    <div className="summary-item-title">{item.title}</div>
                                    <div className="summary-item-author">by {item.author}</div>
                                </div>
                                <div className="summary-item-price">
                                    <div style={{ color: '#1e293b' }}>ETB {item.price ? item.price.toFixed(2) : '0.00'}</div>
                                    <div className="summary-item-qty">Qty: {item.quantity}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="summary-details">
                        <div className="summary-subtitle">Order Details</div>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span style={{ color: '#1e293b', fontWeight: '500' }}>ETB {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span style={{ color: '#1e293b', fontWeight: '500' }}>FREE</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span style={{ color: '#1e293b', fontWeight: '500' }}>ETB {tax.toFixed(2)}</span>
                        </div>
                        <div className="summary-divider" style={{ margin: '15px 0', borderBottom: '1px solid #e2e8f0' }}></div>
                        <div className="summary-row total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '700', fontSize: '1.15rem', color: '#1e293b' }}>
                            <span>Total</span>
                            <span style={{ color: '#4338ca' }}>ETB {totalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="delivery-estimate">
                        <h4>Delivery Estimate</h4>
                        <p>Your order will be delivered within 3-5 business days after processing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
