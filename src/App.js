import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './components/productList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const addToCart = product => {
    setCartItems(prevItems => [...prevItems,{...product, quantity: 1}]);
  };

  const removeFromCart = productId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  console.log(cartItems);
  return (
    <Router>
      <Navbar />
     <Routes>
      <Route path="/" element={<ProductList addToCart={addToCart} loading={loading} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />} />
     </Routes>
    </Router>
  );
}

export default App;