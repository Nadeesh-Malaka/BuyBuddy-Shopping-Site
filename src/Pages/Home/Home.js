// src/Pages/Home/Home.js
import React, { useState } from 'react';
import Headers from '../../Components/Header/Header';
import ProductCard from '../../Components/ProductCard/ProductCard';
import WhyShop from '../../Components/WhyShop/WhyShop';
import Footer from '../../Components/Footer/Footer';
import { mockProducts } from '../../data/products';
import './Home.css';

function Home({ addToCart }) {
  const [products] = useState(mockProducts);

  return (
    <div className="home">
      <Headers />
      <div className="products-section">
        <div className="products-header">
          <h4>Products</h4>
          <div className="products-controls">
            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                All
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">All</a></li>
                <li><a className="dropdown-item" href="#">Electronics</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
              </ul>
            </div>
            <div className="dropdown ms-2">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Sort by: Featured
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Featured</a></li>
                <li><a className="dropdown-item" href="#">Price: Low to High</a></li>
                <li><a className="dropdown-item" href="#">Price: High to Low</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <WhyShop />
      <Footer />
    </div>
  );
}

export default Home;