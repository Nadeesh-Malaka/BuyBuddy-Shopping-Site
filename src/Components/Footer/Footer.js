// src/components/Footer.js
function Footer() {
    return (
      <footer className="bg-dark text-white py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>BuyBuddy</h5>
              <p>The one-stop shop for all your needs.</p>
            </div>
            <div className="col-md-3">
              <h5>Shop</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">All Products</a></li>
                <li><a href="#" className="text-white text-decoration-none">Deals</a></li>
                <li><a href="#" className="text-white text-decoration-none">New Arrivals</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
                <li><a href="#" className="text-white text-decoration-none">Shipping</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Newsletter</h5>
              <p>Subscribe to get special offers and updates.</p>
              <form>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Your email" aria-label="Your email" />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2025 BuyBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;