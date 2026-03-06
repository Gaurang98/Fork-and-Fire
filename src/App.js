import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import About from './pages/About';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import Profile from './pages/Profile';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart or increase quantity if already exists
  const handleAddToCart = (item) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // Item already in cart, just increase quantity
        return currentItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      } else {
        // New item, add to cart
        return [...currentItems, { ...item, qty: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(currentItems => 
      currentItems.filter(item => item.id !== itemId)
    );
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    // Make sure quantity is at least 1
    const quantity = Math.max(1, newQty);
    setCartItems(currentItems => 
      currentItems.map(item => 
        item.id === itemId ? { ...item, qty: quantity } : item
      )
    );
  };

  // Calculate total number of items in cart
  const getTotalCartItems = () => {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
  };

  return (
    <Router>
      <div className="app">
        <Navbar cartItemsCount={getTotalCartItems()} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage addToCart={handleAddToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems} 
                  removeFromCart={handleRemoveFromCart} 
                  updateQty={handleUpdateQuantity} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
