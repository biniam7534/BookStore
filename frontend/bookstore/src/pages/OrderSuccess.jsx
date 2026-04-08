import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderData } = location.state || {};

    if (!orderData) {
        return <Navigate to="/" />;
    }

    const { orderId, payment, amount, customerDetails } = orderData;
    const { fullName, email, address, city, state, zip } = customerDetails || {};

    return (
        <div className="order-success-page">
            <div className="success-card fade-in">
                <div className="success-icon-container">
                    <div className="success-icon-bg">
                        <FiCheckCircle className="success-icon" />
                    </div>
                </div>

                <h1 className="success-title">Order Confirmed!</h1>
                <p className="success-subtitle">Thank you for your purchase. Your order has been placed successfully.</p>

                <div className="order-details-box">
                    <div className="detail-row">
                        <span className="detail-label">Order ID:</span>
                        <span className="detail-value">{orderId}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Payment Method:</span>
                        <span className="detail-value">{payment}</span>
                    </div>
                    <div className="detail-row total-row">
                        <span className="detail-label">Total Amount:</span>
                        <span className="detail-value highlight">ETB {amount}</span>
                    </div>
                </div>

                <p className="shipping-notice">
                    We've sent a confirmation email to <strong>{email}</strong>. Your order will be shipped to:
                </p>

                <div className="shipping-address-box">
                    <p>{fullName}</p>
                    <p>{address}</p>
                    <p>{city}, {state} {zip}</p>
                </div>

                <div className="action-buttons">
                    <button className="continue-btn" onClick={() => navigate('/books')}>
                        Continue Shopping
                    </button>
                    <button className="view-details-btn" onClick={() => navigate('/orders')}>
                        View Order Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
