// src/components/Header.js
function Header() {
    return (
      <div className="container-fluid bg-primary text-white text-center py-5 mb-4">
        <h1 className="display-4">Welcome to BuyBuddy</h1>
        <p className="lead">Discover amazing products at unbeatable prices</p>
        <a href="#products" className="btn btn-light btn-lg mt-3">Shop Now</a>
      </div>
    );
  }
  export default Header;