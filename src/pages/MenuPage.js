import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { SplitText, FadeInUp } from '../components/TextAnimations';

// Menu items organized by category
const menuItems = {
  pizza: [
    { 
      id: 1, 
      name: 'Margherita Pizza', 
      desc: 'Fresh tomatoes, mozzarella, and basil', 
      price: 599,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pizza'
    },
    { 
      id: 2, 
      name: 'Pepperoni Pizza', 
      desc: 'Classic pepperoni with cheese', 
      price: 699,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pizza'
    },
    { 
      id: 3, 
      name: 'Veggie Supreme', 
      desc: 'Bell peppers, mushrooms, onions, olives', 
      price: 649,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pizza'
    }
  ],
  burgers: [
    { 
      id: 4, 
      name: 'Classic Cheeseburger', 
      desc: 'Beef patty with cheese, lettuce, tomato', 
      price: 399,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'burgers'
    },
    { 
      id: 5, 
      name: 'Chicken Deluxe', 
      desc: 'Grilled chicken with special sauce', 
      price: 449,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e2dadc4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'burgers'
    },
    { 
      id: 6, 
      name: 'Veggie Burger', 
      desc: 'Plant-based patty with fresh veggies', 
      price: 349,
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'burgers'
    }
  ],
  pasta: [
    { 
      id: 7, 
      name: 'Spaghetti Carbonara', 
      desc: 'Creamy pasta with bacon and parmesan', 
      price: 549,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pasta'
    },
    { 
      id: 8, 
      name: 'Penne Arrabbiata', 
      desc: 'Spicy tomato sauce with herbs', 
      price: 499,
      image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pasta'
    },
    { 
      id: 9, 
      name: 'Fettuccine Alfredo', 
      desc: 'Rich creamy white sauce pasta', 
      price: 599,
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pasta'
    }
  ],
  desserts: [
    { 
      id: 10, 
      name: 'Chocolate Cake', 
      desc: 'Rich chocolate cake with frosting', 
      price: 249,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'desserts'
    },
    { 
      id: 11, 
      name: 'Cheesecake', 
      desc: 'Creamy New York style cheesecake', 
      price: 299,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'desserts'
    },
    { 
      id: 12, 
      name: 'Ice Cream Sundae', 
      desc: 'Vanilla ice cream with toppings', 
      price: 199,
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'desserts'
    }
  ]
};

function MenuPage({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get all menu items from all categories
  const getAllMenuItems = () => {
    return Object.values(menuItems).flat();
  };
  
  // Filter items based on selected category
  const getItemsToDisplay = () => {
    if (selectedCategory === 'all') {
      return getAllMenuItems();
    }
    return menuItems[selectedCategory] || [];
  };

  const availableCategories = [
    { id: 'all', name: 'All Items' },
    { id: 'pizza', name: '🍕 Pizza' },
    { id: 'burgers', name: '🍔 Burgers' },
    { id: 'pasta', name: '🍝 Pasta' },
    { id: 'desserts', name: '🍰 Desserts' }
  ];

  return (
    <div className="menu-page">
      <div className="menu-header">
        <SplitText className="menu-title">Our Menu</SplitText>
        <FadeInUp delay={0.6}>
          <p>Delicious food made with love and fresh ingredients</p>
        </FadeInUp>
      </div>
      
      <div className="menu-categories">
        {availableCategories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="menu-items">
        {getItemsToDisplay().map(item => (
          <ProductCard 
            key={item.id} 
            item={item} 
            onAdd={() => addToCart(item)} 
          />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;