import React from 'react';

const About = () => {
  // Team member data
  const teamMembers = [
    {
      name: "Chef Marco Rodriguez",
      role: "Head Chef",
      description: "15+ years of culinary experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager", 
      description: "Ensuring smooth delivery operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "David Chen",
      role: "Customer Success",
      description: "Making sure every customer is happy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Fork & Fire</h1>
        <p>Bringing delicious food to your doorstep since 2020</p>
      </div>

      <div className="about-content">
        <section className="about-story">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, Fork & Fire started with a simple mission: to bring restaurant-quality 
              food directly to your home. What began as a small local delivery service has grown into 
              a beloved food hub that serves thousands of satisfied customers daily.
            </p>
            <p>
              We believe that great food brings people together, and we're passionate about delivering 
              not just meals, but memorable dining experiences that you can enjoy in the comfort of your home.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Restaurant kitchen"
            />
          </div>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality First</h3>
              <p>We source only the finest ingredients and work with skilled chefs to ensure every meal meets our high standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Speed & Reliability</h3>
              <p>Fast delivery times without compromising quality. Your food arrives hot, fresh, and on time.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer Care</h3>
              <p>Your satisfaction is our priority. We're always here to ensure you have the best experience possible.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to eco-friendly practices, from sustainable packaging to supporting local suppliers.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img 
                  src={member.image} 
                  alt={member.name}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-stats">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>200,000+</h3>
              <p>Orders Delivered</p>
            </div>
            <div className="stat-item">
              <h3>25</h3>
              <p>Partner Restaurants</p>
            </div>
            <div className="stat-item">
              <h3>4.8★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
