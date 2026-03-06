import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cartItems, removeFromCart, updateQty }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      // Clear cart after successful order (you might want to do this in the parent component)
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="cart-page">
        <div className="order-success">
          <div className="success-icon">🎉</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your order. Your delicious food will be delivered in 30-45 minutes.</p>
          <div className="order-details">
            <h3>Order Summary</h3>
            <p><strong>Order #:</strong> FH{Date.now().toString().slice(-6)}</p>
            <p><strong>Total Items:</strong> {getTotalItems()}</p>
            <p><strong>Total Amount:</strong> ${getTotalPrice()}</p>
            <p><strong>Estimated Delivery:</strong> 30-45 minutes</p>
          </div>
          <div className="order-actions">
            <Link to="/menu" className="cta-button">Order More</Link>
            <Link to="/" className="secondary-button">Go Home</Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added any delicious food to your cart yet.</p>
          <Link to="/menu" className="cta-button">Browse Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <p>{getTotalItems()} items in your cart</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-desc">{item.desc}</p>
                <p className="item-price">${item.price}</p>
              </div>
              <div className="item-controls">
                <div className="quantity-controls">
                  <button 
                    className="qty-btn"
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>
                  <span className="qty-display">{item.qty}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => updateQty(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="item-total">${(item.price * item.qty).toFixed(2)}</p>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal ({getTotalItems()} items):</span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>$3.99</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>${(parseFloat(getTotalPrice()) * 0.08).toFixed(2)}</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span><strong>Total:</strong></span>
              <span><strong>${(parseFloat(getTotalPrice()) + 3.99 + parseFloat(getTotalPrice()) * 0.08).toFixed(2)}</strong></span>
            </div>
            
            <div className="delivery-info">
              <h3>🚚 Delivery Information</h3>
              <p><strong>Estimated Time:</strong> 30-45 minutes</p>
              <p><strong>Delivery to:</strong> Your Location</p>
            </div>

            <button 
              className={`checkout-btn ${isCheckingOut ? 'loading' : ''}`}
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processing...' : 'Place Order'}
            </button>
            
            <Link to="/menu" className="continue-shopping">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;