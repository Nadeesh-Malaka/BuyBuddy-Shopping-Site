// src/Pages/Profile/ProfilePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './ProfilePage.css';

function ProfilePage() {
  // Placeholder user data (to be replaced with actual data from backend)
  const user = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '+1 234 567 8900',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', // Placeholder image
  };

  return (
    <div className="profile-page">
      <main className="profile-container">
        <div className="profile-sidebar">
          <ul className="sidebar-menu">
            <li className="menu-item active">
              <Link to="/profile">
                <i className="bi bi-person"></i> Profile
              </Link>
            </li>
            <li className="menu-item">
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
        <div className="profile-content">
          <div className="profile-header">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <div className="user-info">
              <h2>{user.fullName}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="profile-details">
            <div className="detail-item">
              <label>Full Name</label>
              <input type="text" value={user.fullName} readOnly />
            </div>
            <div className="detail-item">
              <label>Phone Number</label>
              <input type="text" value={user.phoneNumber} readOnly />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProfilePage;
