// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import CartPage from './Pages/Cart/CartPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import OrderConfirmationPage from './Pages/OrderConfirmation/OrderConfirmationPage';
import ProductDetailPage from './Pages/ProductDetail/ProductDetailPage';
import CategoriesPage from './Pages/Categories/CategoriesPage'; // Import CategoriesPage
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/categories" element={<CategoriesPage />} /> {/* Update to use CategoriesPage */}
              <Route path="/deals" element={<div>Deals Page (TBD)</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;