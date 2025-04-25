 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap Icons
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  // Render star rating (e.g., 4.5 stars)
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill"></i>);
    }
    // Half star if applicable
    if (hasHalfStar && stars.length < 5) {
      stars.push(<i key="half" className="bi bi-star-half"></i>);
    }
    // Empty stars
    while (stars.length < 5) {
      stars.push(<i key={`empty-${stars.length}`} className="bi bi-star"></i>);
    }
    return stars;
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h5>{product.name}</h5>
        <div className="product-rating">
          {renderStars(product.rating)}
          <span>({product.rating})</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-add-to-cart">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)}>
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;