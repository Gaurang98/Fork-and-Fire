import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SplitText, BlurText, GradientText, TextType, FadeInUp, ScaleIn, SlideInLeft, SlideInRight } from '../components/TextAnimations';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="hero-background">
          <motion.div 
            className="floating-food"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🍕
          </motion.div>
          <motion.div 
            className="floating-food floating-burger"
            animate={{
              y: [20, -20, 20],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            🍔
          </motion.div>
          <motion.div 
            className="floating-food floating-pasta"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            🍝
          </motion.div>
          <motion.div 
            className="floating-food floating-taco"
            animate={{
              y: [10, -10, 10],
              rotate: [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            🌮
          </motion.div>
          <motion.div 
            className="floating-food floating-cake"
            animate={{
              y: [-12, 12, -12],
              rotate: [0, 4, 0, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            🍰
          </motion.div>
        </div>
        
        <div className="hero-content-landing">
          <SlideInLeft delay={0.2}>
            <GradientText className="landing-brand">
              Fork & Fire
            </GradientText>
          </SlideInLeft>
          
          <SplitText className="landing-title" delay={0.5}>
            Bold flavors. Fire-grilled vibes. Delivered fast.
          </SplitText>
          
          <BlurText className="landing-subtitle" delay={1.2}>
            Taste-rich meals crafted to satisfy every craving, any time of day.
          </BlurText>
          
          <FadeInUp delay={1.8} className="landing-cta-container">
            <Link to="/menu" className="landing-cta-button">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore The Menu
              </motion.span>
            </Link>
            <Link to="/about" className="landing-secondary-button">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.span>
            </Link>
          </FadeInUp>
          
          <FadeInUp delay={2.2} className="landing-stats">
            <div className="stat-item">
              <ScaleIn delay={2.4}>
                <h3>50K+</h3>
                <p>Happy Customers</p>
              </ScaleIn>
            </div>
            <div className="stat-item">
              <ScaleIn delay={2.6}>
                <h3>25</h3>
                <p>Partner Restaurants</p>
              </ScaleIn>
            </div>
            <div className="stat-item">
              <ScaleIn delay={2.8}>
                <h3>4.8★</h3>
                <p>Average Rating</p>
              </ScaleIn>
            </div>
          </FadeInUp>
        </div>
        
        <SlideInRight delay={0.8} className="hero-image-landing">
          <motion.img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Delicious food spread"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }}
          />
        </SlideInRight>
      </section>

      {/* Features Section */}
      <section className="landing-features">
        <FadeInUp delay={0.2}>
          <SplitText className="section-title">
            Why Fork & Fire Hits Different
          </SplitText>
        </FadeInUp>
        
        <div className="features-grid-landing">
          <FadeInUp delay={0.4} className="feature-card-landing">
            <motion.div 
              className="feature-icon-large"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              🚀
            </motion.div>
            <h3>Lightning Fast Delivery</h3>
            <p>Get your food delivered hot and fresh in under 30 minutes with our optimized delivery network</p>
          </FadeInUp>
          
          <FadeInUp delay={0.6} className="feature-card-landing">
            <motion.div 
              className="feature-icon-large"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              🍽️
            </motion.div>
            <h3>Premium Quality</h3>
            <p>Made with the finest ingredients and prepared by expert chefs who care about every detail</p>
          </FadeInUp>
          
          <FadeInUp delay={0.8} className="feature-card-landing">
            <motion.div 
              className="feature-icon-large"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              💰
            </motion.div>
            <h3>Great Value</h3>
            <p>Affordable prices without compromising on quality, taste, or portion sizes</p>
          </FadeInUp>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="landing-categories">
        <FadeInUp delay={0.2}>
          <SplitText className="section-title">
            Explore Our Menu
          </SplitText>
        </FadeInUp>
        
        <div className="categories-grid-landing">
          <motion.div 
            className="category-card-landing"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Pizza"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
            <div className="category-content">
              <h3>🍕 Pizza</h3>
              <p>Authentic Italian pizzas with fresh ingredients</p>
              <Link to="/menu" className="category-link">View Menu →</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="category-card-landing"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Burgers"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
            <div className="category-content">
              <h3>🍔 Burgers</h3>
              <p>Juicy burgers made with premium beef and fresh buns</p>
              <Link to="/menu" className="category-link">View Menu →</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="category-card-landing"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Pasta"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
            <div className="category-content">
              <h3>🍝 Pasta</h3>
              <p>Creamy and flavorful pasta dishes from Italy</p>
              <Link to="/menu" className="category-link">View Menu →</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="category-card-landing"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Desserts"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
            <div className="category-content">
              <h3>🍰 Desserts</h3>
              <p>Sweet treats to complete your perfect meal</p>
              <Link to="/menu" className="category-link">View Menu →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="landing-testimonials">
        <FadeInUp delay={0.2}>
          <SplitText className="section-title">
            What Our Customers Say
          </SplitText>
        </FadeInUp>
        
        <div className="testimonials-grid">
          <FadeInUp delay={0.4} className="testimonial-card">
            <div className="testimonial-content">
              <p>"The food quality is outstanding and delivery is super fast. Fork & Fire has become my go-to for all meals!"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" title="Sarah Johnson">
                  SJ
                </div>
                <div>
                  <h4>Sarah Johnson</h4>
                  <span>Regular Customer</span>
                </div>
              </div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.6} className="testimonial-card">
            <div className="testimonial-content">
              <p>"Amazing variety and the taste is incredible. The app is so easy to use and customer service is top-notch!"</p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Customer"
                />
                <div>
                  <h4>Mike Chen</h4>
                  <span>Food Enthusiast</span>
                </div>
              </div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.8} className="testimonial-card">
            <div className="testimonial-content">
              <p>"Fresh ingredients, perfect packaging, and always on time. Fork & Fire sets the standard for food delivery!"</p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Customer"
                />
                <div>
                  <h4>David Rodriguez</h4>
                  <span>Chef & Critic</span>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Call to Action */}
      <section className="landing-cta">
        <FadeInUp delay={0.2}>
          <SplitText className="cta-title">
            Ready To Taste The Fire?
          </SplitText>
        </FadeInUp>
        
        <FadeInUp delay={0.6}>
          <BlurText className="cta-subtitle">
            Join the flavor crowd and turn every meal into a crave-worthy moment.
          </BlurText>
        </FadeInUp>
        
        <FadeInUp delay={1.0} className="cta-buttons">
          <Link to="/menu" className="landing-cta-button">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.span>
          </Link>
          <Link to="/contact" className="landing-secondary-button">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.span>
          </Link>
        </FadeInUp>
      </section>
    </div>
  );
}

export default LandingPage;