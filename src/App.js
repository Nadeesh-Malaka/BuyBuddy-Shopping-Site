import Navbar from './Components/Navbar/Navbar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';   

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/"   />
        <Route path="/categories" element={<div>Categories Page (TBD)</div>} />
        <Route path="/deals" element={<div>Deals Page (TBD)</div>} />
        <Route path="/cart" element={<div>Cart Page (TBD)</div>} />
      </Routes>
    </Router>
  );
}

export default App;