import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { FiCheckCircle, FiDownload } from 'react-icons/fi';
import './OrderSuccess.css';

const generateReceiptHTML = (orderData) => {
    const { orderId, date, payment, amount, customerDetails, items = [] } = orderData;
    const { fullName, email, address, city, state, zip, phone } = customerDetails || {};

    const itemRows = items.map(item => `
        <tr>
            <td style="padding:10px 8px;border-bottom:1px solid #f1f5f9;">${item.title}</td>
            <td style="padding:10px 8px;border-bottom:1px solid #f1f5f9;color:#64748b;">${item.author}</td>
            <td style="padding:10px 8px;border-bottom:1px solid #f1f5f9;text-align:center;">${item.quantity}</td>
            <td style="padding:10px 8px;border-bottom:1px solid #f1f5f9;text-align:right;">ETB ${(item.price || 0).toFixed(2)}</td>
            <td style="padding:10px 8px;border-bottom:1px solid #f1f5f9;text-align:right;font-weight:600;">ETB ${((item.price || 0) * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');

    const subtotal = items.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
    const tax = subtotal * 0.15;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Receipt – ${orderId}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Outfit',sans-serif; background:#f8fafc; color:#1e293b; padding:20px; }
    .receipt { max-width:720px; margin:0 auto; background:white; border-radius:16px; overflow:hidden; box-shadow:0 10px 40px rgba(0,0,0,0.08); }
    .receipt-header { background:linear-gradient(135deg,#0d9488,#1e3a8a); color:white; padding:32px 40px; display:flex; justify-content:space-between; align-items:center; }
    .receipt-header h1 { font-size:1.8rem; font-weight:700; }
    .receipt-header p { font-size:0.9rem; opacity:0.85; margin-top:4px; }
    .badge { background:rgba(255,255,255,0.2); padding:8px 16px; border-radius:50px; font-size:0.85rem; font-weight:600; }
    .body { padding:32px 40px; }
    .section-title { font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#94a3b8; margin-bottom:12px; }
    .info-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:28px; }
    .info-cell label { font-size:0.8rem; color:#94a3b8; display:block; margin-bottom:2px; }
    .info-cell span { font-weight:600; color:#1e293b; }
    table { width:100%; border-collapse:collapse; margin-bottom:24px; }
    thead tr { background:#f8fafc; }
    th { padding:10px 8px; text-align:left; font-size:0.8rem; color:#64748b; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; }
    th:nth-child(3),th:nth-child(4),th:nth-child(5) { text-align:right; }
    th:nth-child(3) { text-align:center; }
    .totals { background:#f8fafc; border-radius:12px; padding:20px; margin-bottom:24px; }
    .total-row { display:flex; justify-content:space-between; padding:6px 0; color:#64748b; font-size:0.95rem; }
    .total-row.grand { font-size:1.1rem; font-weight:700; color:#1e293b; border-top:2px solid #e2e8f0; padding-top:14px; margin-top:8px; }
    .total-row.grand span:last-child { color:#0d9488; }
    .footer-note { text-align:center; color:#94a3b8; font-size:0.85rem; line-height:1.6; padding-top:20px; border-top:1px dashed #e2e8f0; }
    @media print {
      body { background:white; padding:0; }
      .receipt { box-shadow:none; border-radius:0; }
      .no-print { display:none !important; }
    }
    @media (max-width:600px) {
      .receipt-header { flex-direction:column; gap:12px; padding:24px 20px; }
      .body { padding:20px; }
      .info-grid { grid-template-columns:1fr; }
      table thead th:nth-child(2) { display:none; }
      table tbody td:nth-child(2) { display:none; }
    }
  </style>
</head>
<body>
  <div class="receipt">
    <div class="receipt-header">
      <div>
        <h1>📚 BookShell</h1>
        <p>Official Purchase Receipt</p>
      </div>
      <div class="badge">✅ Order Confirmed</div>
    </div>
    <div class="body">
      <p class="section-title">Order Information</p>
      <div class="info-grid">
        <div class="info-cell"><label>Order ID</label><span>${orderId}</span></div>
        <div class="info-cell"><label>Date</label><span>${date}</span></div>
        <div class="info-cell"><label>Payment Method</label><span>${payment}</span></div>
        <div class="info-cell"><label>Status</label><span style="color:#10b981;">Processing</span></div>
      </div>

      <p class="section-title">Customer Details</p>
      <div class="info-grid" style="margin-bottom:28px;">
        <div class="info-cell"><label>Full Name</label><span>${fullName}</span></div>
        <div class="info-cell"><label>Email</label><span>${email}</span></div>
        <div class="info-cell"><label>Phone</label><span>${phone || '—'}</span></div>
        <div class="info-cell"><label>Shipping Address</label><span>${address}, ${city}, ${state} ${zip}</span></div>
      </div>

      <p class="section-title">Items Purchased</p>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th style="text-align:center;">Qty</th>
            <th style="text-align:right;">Unit Price</th>
            <th style="text-align:right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${itemRows || `<tr><td colspan="5" style="padding:20px;text-align:center;color:#94a3b8;">No items found</td></tr>`}
        </tbody>
      </table>

      <div class="totals">
        <div class="total-row"><span>Subtotal</span><span>ETB ${subtotal.toFixed(2)}</span></div>
        <div class="total-row"><span>Shipping</span><span>FREE</span></div>
        <div class="total-row"><span>Tax (15%)</span><span>ETB ${tax.toFixed(2)}</span></div>
        <div class="total-row grand"><span>Total Paid</span><span>ETB ${parseFloat(amount).toFixed(2)}</span></div>
      </div>

      <div class="footer-note">
        <p>Thank you for shopping with <strong>BookShell</strong>! 🎉</p>
        <p>A confirmation has been sent to <strong>${email}</strong>.</p>
        <p style="margin-top:8px;">Questions? Contact us at <strong>contact@bookshell.com</strong></p>
      </div>
    </div>
  </div>
  <div class="no-print" style="text-align:center;margin-top:20px;">
    <button onclick="window.print()" style="background:linear-gradient(135deg,#0d9488,#1e3a8a);color:white;padding:12px 28px;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;font-family:inherit;">
      🖨️ Print / Save as PDF
    </button>
  </div>
</body>
</html>`;
};

const OrderSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderData } = location.state || {};

    if (!orderData) {
        return <Navigate to="/" />;
    }

    const { orderId, payment, amount, customerDetails } = orderData;
    const { fullName, email, address, city, state, zip } = customerDetails || {};

    const handleContinueShopping = () => {
        // Open receipt in a new tab
        const receiptHTML = generateReceiptHTML(orderData);
        const receiptWindow = window.open('', '_blank');
        if (receiptWindow) {
            receiptWindow.document.write(receiptHTML);
            receiptWindow.document.close();
        }
        // Then navigate to books
        navigate('/books');
    };

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

                <div className="receipt-hint">
                    <FiDownload className="receipt-hint-icon" />
                    Clicking "Continue Shopping" will open your <strong>receipt</strong> in a new tab.
                </div>

                <div className="action-buttons">
                    <button className="continue-btn" onClick={handleContinueShopping}>
                        🧾 Continue Shopping & Get Receipt
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

