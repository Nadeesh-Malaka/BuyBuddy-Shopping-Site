// src/Pages/Addresses/AddressesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './AddressesPage.css';

function AddressesPage() {
  // Placeholder addresses (to be replaced with actual data from backend)
  const addresses = [
    {
      id: 1,
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      phone: '+1 234 567 8900',
    },
  ];

  return (
    <div className="addresses-page">
      <main className="addresses-container">
        <div className="profile-sidebar">
          <ul className="sidebar-menu">
            <li className="menu-item">
              <Link to="/profile">
                <i className="bi bi-person"></i> Profile
              </Link>
            </li>
            <li className="menu-item active">
              <Link to="/addresses">
                <i className="bi bi-geo-alt"></i> Addresses
              </Link>
            </li>
            <li className="menu-item">
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
        <div className="addresses-content">
          <h2>Saved Addresses</h2>
          {addresses.length > 0 ? (
            addresses.map((address) => (
              <div key={address.id} className="address-item">
                <p><strong>{address.name}</strong></p>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
                <p>Phone: {address.phone}</p>
                <div className="address-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No addresses saved yet.</p>
          )}
          <button className="add-address-btn">Add New Address</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AddressesPage;