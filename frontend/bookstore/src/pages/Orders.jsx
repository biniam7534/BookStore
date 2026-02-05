import React from 'react';
import { FiArrowLeft, FiCreditCard, FiCheckCircle, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();

    const orders = [
        {
            id: "#ORD-1001",
            date: "Oct 15, 2023",
            amount: "₹1250.00",
            payment: "Online",
            status: "Delivered"
        },
        {
            id: "#ORD-1002",
            date: "Oct 20, 2023",
            amount: "₹850.00",
            payment: "Cash on Delivery",
            status: "Processing"
        },
        {
            id: "#ORD-1003",
            date: "Oct 22, 2023",
            amount: "₹2100.00",
            payment: "Online",
            status: "Shipped"
        }
    ];

    return (
        <div className="orders-page">
            <div className="orders-container container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FiArrowLeft /> Back
                </button>

                <h1 className="orders-title">My Orders</h1>

                <div className="orders-table-wrapper fade-in">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td className="order-id">{order.id}</td>
                                    <td className="order-date">{order.date}</td>
                                    <td className="order-amount">{order.amount}</td>
                                    <td>
                                        <span className={`badge payment-badge ${order.payment.toLowerCase().includes('online') ? 'online' : 'cod'}`}>
                                            <FiCreditCard className="badge-icon" /> {order.payment}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge status-badge ${order.status.toLowerCase()}`}>
                                            <FiCheckCircle className="badge-icon" /> {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="view-btn">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
