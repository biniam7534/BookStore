import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPackage, FiCalendar, FiCreditCard } from 'react-icons/fi';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:5555/api/orders");
                if (res.data && res.data.data) {
                    setOrders(res.data.data);
                } else if (Array.isArray(res.data)) {
                    setOrders(res.data);
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) {
        return <div className="orders-loading">Loading your orders...</div>;
    }

    return (
        <div className="orders-history-page">
            <div className="container">
                <div className="orders-header fade-in">
                    <h1 className="orders-title"><FiPackage /> My Orders</h1>
                    <p className="orders-subtitle">View and manage your recent purchases</p>
                </div>

                {orders.length === 0 ? (
                    <div className="empty-orders-state fade-in">
                        <FiPackage className="empty-icon" />
                        <h2>No orders found</h2>
                        <p>You haven't placed any orders yet.</p>
                    </div>
                ) : (
                    <div className="orders-list fade-in">
                        {orders.slice().reverse().map(order => (
                            <div key={order._id || order.id || order.orderId} className="order-card">
                                <div className="order-card-header">
                                    <div className="order-id">Order #{order.orderId || order._id}</div>
                                    <div className="order-status processing">{order.status || 'Processing'}</div>
                                </div>
                                <div className="order-card-body">
                                    <div className="order-info-group">
                                        <div className="info-label"><FiCalendar /> Date</div>
                                        <div className="info-value">{order.date || new Date().toISOString().split('T')[0]}</div>
                                    </div>
                                    <div className="order-info-group">
                                        <div className="info-label"><FiCreditCard /> Payment Method</div>
                                        <div className="info-value">{order.payment || "Card"}</div>
                                    </div>
                                    <div className="order-info-group">
                                        <div className="info-label">Customer</div>
                                        <div className="info-value">{order.customerDetails ? order.customerDetails.fullName : 'Guest'}</div>
                                    </div>
                                    <div className="order-info-group amount-group">
                                        <div className="info-label">Total Amount</div>
                                        <div className="info-value amount-value">ETB {order.amount || 0}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
