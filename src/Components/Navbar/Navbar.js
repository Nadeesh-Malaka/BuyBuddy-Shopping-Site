// src/Components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for layout
import { useCart } from '../../context/CartContext'; // Import useCart
import './Navbar.css'; // Custom CSS

function Navbar() {
  const { cartItems } = useCart(); // Get cartItems from context

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
            <Link to="/profile" className="navbar-user">
              <i className="bi bi-person"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;