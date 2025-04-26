// src/Components/Navbar/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for layout
import { useCart } from '../../context/CartContext'; // Import useCart
import './Navbar.css'; // Custom CSS

function Navbar() {
  const { cartItems } = useCart(); // Get cartItems from context

  // Simulate user logged in (to be replaced with actual auth logic after backend setup)
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true to test logged-in state
  const user = {
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', // Placeholder image
    email: 'john@example.com',
  };

  // State for dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    console.log("Toggling dropdown, current state:", isDropdownOpen); // Debug log
    setIsDropdownOpen((prev) => !prev);
  };

  // Function to handle logout (to be implemented with backend)
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    console.log("User logged out");
    // Add logout logic here (e.g., clear auth token, redirect to login)
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/">BuyBuddy</Link>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links, Search, and Icons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links */}
          <ul className="navbar-nav navbar-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deals">Deals</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="navbar-search">
            <input type="search" placeholder="Search products..." aria-label="Search" />
          </form>

          {/* Icons (Cart and User) */}
          <div className="navbar-icons">
            <Link to="/cart" className="navbar-cart">
              <i className="bi bi-cart"></i>
              <span className="badge">{cartItems ? cartItems.length : 0}</span>
            </Link>
            {isLoggedIn ? (
              <div className="navbar-user-dropdown">
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="navbar-profile-pic"
                  onClick={toggleDropdown} // Use named function for clarity
                  style={{ cursor: 'pointer' }} // Ensure cursor indicates clickable
                />
                {isDropdownOpen && (
                  <div className="navbar-dropdown-menu">
                    <p className="navbar-dropdown-email">{user.email}</p>
                    <Link to="/profile" onClick={() => setIsDropdownOpen(false)}>
                      Your Profile
                    </Link>
                    <Link to="/addresses" onClick={() => setIsDropdownOpen(false)}>
                      Addresses
                    </Link>
                    <Link to="/payment-methods" onClick={() => setIsDropdownOpen(false)}>
                      Payment Methods
                    </Link>
                    <Link to="/order-history" onClick={() => setIsDropdownOpen(false)}>
                      Order History
                    </Link>
                    <button className="navbar-logout-btn" onClick={handleLogout}>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="navbar-user">
                <i className="bi bi-person"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;