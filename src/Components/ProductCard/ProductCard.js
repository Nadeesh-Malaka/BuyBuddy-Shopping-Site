// src/components/ProductCard.js
function ProductCard({ product, addToCart }) {
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <i
            key={i}
            className={`bi bi-star${i <= Math.floor(rating) ? '-fill' : ''} text-warning`}
          ></i>
        );
      }
      return stars;
    };
  
    return (
      <div className="col-md-3 mb-4">
        <div className="card h-100 shadow-sm">
          <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '150px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <div className="mb-2">{renderStars(product.rating)} ({product.rating})</div>
            <p className="card-text text-muted">{product.description}</p>
            <h6 className="card-subtitle mb-2">${product.price.toFixed(2)}</h6>
            <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>
              <i className="bi bi-cart-plus me-2"></i>Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default ProductCard;