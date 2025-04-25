// src/pages/Home.js
import { useState } from 'react';
import { mockProducts } from '../data/products';

function Home({ addToCart }) {
  const [products] = useState(mockProducts);

  return (
    <div>
      <Header />
      <div className="container" id="products">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Products</h4>
          <div>
            <div className="dropdown me-2 d-inline">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                All
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">All</a></li>
                <li><a className="dropdown-item" href="#">Electronics</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
              </ul>
            </div>
            <div className="dropdown d-inline">
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
        <div className="row">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;