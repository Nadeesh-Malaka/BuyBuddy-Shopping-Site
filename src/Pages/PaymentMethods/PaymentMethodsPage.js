// src/Pages/PaymentMethods/PaymentMethodsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './PaymentMethodsPage.css';

function PaymentMethodsPage() {
  // Placeholder payment methods (to be replaced with actual data from backend)
  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      lastFour: '1234',
      expiry: '12/25',
    },
  ];

  return (
    <div className="payment-methods-page">
      <main className="payment-methods-container">
        <div className="profile-sidebar">
          <ul className="sidebar-menu">
            <li className="menu-item">
              <Link to="/profile">
                <i className="bi bi-person"></i> Profile
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/addresses">
                <i className="bi bi-geo-alt"></i> Addresses
              </Link>
            </li>
            <li className="menu-item active">
              <Link to="/payment-methods">
                <i className="bi bi-credit-card"></i> Payment Methods
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/order-history">
                <i className="bi bi-box"></i> Order History
              </Link>
            </li>
          </ul>
        </div>
        <div className="payment-methods-content">
          <h2>Saved Payment Methods</h2>
          {paymentMethods.length > 0 ? (
            paymentMethods.map((method) => (
              <div key={method.id} className="payment-method-item">
                <p><strong>{method.type}</strong></p>
                <p>Ending in {method.lastFour}</p>
                <p>Expires {method.expiry}</p>
                <div className="payment-method-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No payment methods saved yet.</p>
          )}
          <button className="add-payment-method-btn">Add New Payment Method</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PaymentMethodsPage;