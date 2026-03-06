import React from 'react';

const ProductCard = ({ item, onAdd }) => {
  // Multiple fallback images for better reliability
  const fallbackImages = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  ];
  
  let fallbackIndex = 0;
  
  const handleImageError = (e) => {
    // Try multiple fallback images
    if (fallbackIndex < fallbackImages.length) {
      e.target.src = fallbackImages[fallbackIndex];
      fallbackIndex++;
    } else {
      // Final fallback: show a placeholder div
      e.target.style.display = 'none';
      const placeholder = document.createElement('div');
      placeholder.className = 'image-placeholder';
      placeholder.innerHTML = '🍽️';
      placeholder.style.cssText = `
        width: 100%; 
        height: 200px; 
        background: #f0f0f0; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-size: 3rem; 
        color: #ccc;
        border-radius: 8px;
      `;
      e.target.parentNode.appendChild(placeholder);
    }
  };

  const handleAddClick = () => {
    onAdd(item);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={item.image || fallbackImages[0]} 
          alt={item.name}
          onError={handleImageError}
        />
      </div>
      <div className="product-content">
        <h3 className="product-name">{item.name}</h3>
        <p className="product-desc">{item.desc}</p>
        <div className="product-footer">
          <span className="product-price">₹{item.price}</span>
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddClick}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
