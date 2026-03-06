import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ cartItemsCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(prev => !prev);
  };

  const closeProfileDropdown = () => {
    setProfileDropdownOpen(false);
  };

  const isActiveLink = (path) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/home')) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" style={{ height: 35, overflow: 'visible', display: 'flex', alignItems: 'center' }}>

          <img
            src="/images/Logo.png"
            alt="Fork & Fire"
            style={{
              height: '100%',
              transform: 'scale(1.9)',
              transformOrigin: 'left center',
              display: 'block'
            }}
          />

        </Link>
        
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${isActiveLink('/menu') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link 
            to="/cart" 
            className={`nav-link cart-link ${isActiveLink('/cart') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            🛒 Cart {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
          </Link>
          
          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <button 
              className="profile-btn"
              onClick={toggleProfileDropdown}
            >
              <span className="profile-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                </svg>
              </span>
              Profile
            </button>
            {profileDropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/profile" 
                  className="dropdown-item"
                  onClick={closeProfileDropdown}
                >
                  👤 My Profile
                </Link>
                <Link 
                  to="/profile" 
                  className="dropdown-item"
                  onClick={closeProfileDropdown}
                >
                  📋 Order History
                </Link>
                <div className="dropdown-divider"></div>
                <button 
                  className="dropdown-item logout-btn"
                  onClick={() => {
                    closeProfileDropdown();
                    // Add logout logic here
                    alert('Logout functionality to be implemented!');
                  }}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="nav-toggle" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
