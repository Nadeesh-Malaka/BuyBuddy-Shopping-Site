// src/App.js
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/categories" element={<div>Categories Page (TBD)</div>} />
        <Route path="/deals" element={<div>Deals Page (TBD)</div>} />
        <Route path="/cart" element={<div>Cart Page (TBD)</div>} />
      </Routes>
    </Router>
  );
}

export default App;