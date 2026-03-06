import React from 'react';
import { Link } from 'react-router-dom';
import { SplitText, FadeInUp, ScaleIn, SlideInLeft, SlideInRight } from '../components/TextAnimations';

const Home = () => {
  // Popular items to showcase
  const featuredItems = [
    {
      name: "Margherita Pizza",
      price: "₹599",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      alt: "Pizza"
    },
    {
      name: "Classic Burger",
      price: "₹399", 
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      alt: "Burger"
    },
    {
      name: "Creamy Pasta",
      price: "₹549",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      alt: "Pasta"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <SlideInLeft className="hero-content">
          <SplitText className="hero-title">Welcome to Fork & Fire Kitchen</SplitText>
          <FadeInUp delay={0.8} className="hero-subtitle">
            Strong flavors, smoky vibes, and comfort food worth craving.
          </FadeInUp>
          <FadeInUp delay={1.2}>
            <Link to="/menu" className="cta-button">
              Order Now
            </Link>
          </FadeInUp>
        </SlideInLeft>
        <SlideInRight delay={0.4} className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Delicious food spread"
          />
        </SlideInRight>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Fork & Fire Hits Different</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>Get your food delivered hot and fresh in under 30 minutes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Quality Food</h3>
            <p>Made with the finest ingredients and prepared by expert chefs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Great Prices</h3>
            <p>Affordable prices without compromising on quality and taste</p>
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="popular-preview">
        <h2>Popular Items</h2>
        <div className="popular-grid">
          {featuredItems.map((item, index) => (
            <div key={index} className="popular-item">
              <img 
                src={item.image} 
                alt={item.alt}
              />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <div className="popular-cta">
          <Link to="/menu" className="secondary-button">
            View Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
