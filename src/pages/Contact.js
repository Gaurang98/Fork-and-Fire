import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with us.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-section">
            <h2>Get In Touch</h2>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Food Street<br />Taste City, TC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>(555) 123-FOOD<br />(555) 123-3663</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>hello@forkandfire.com<br />support@forkandfire.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h3>Hours</h3>
                <p>Mon-Thu: 11:00 AM - 10:00 PM<br />
                   Fri-Sat: 11:00 AM - 11:00 PM<br />
                   Sun: 12:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-image">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Contact us"
            />
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          {isSubmitted ? (
            <div className="success-message">
              <h3>✅ Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What are your delivery areas?</h3>
              <p>We currently deliver within a 10-mile radius of our kitchen. Enter your address at checkout to see if we deliver to your area.</p>
            </div>
            <div className="faq-item">
              <h3>How long does delivery take?</h3>
              <p>Most orders are delivered within 30-45 minutes. During peak hours, it may take up to 60 minutes.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer contactless delivery?</h3>
              <p>Yes! We offer contactless delivery options. Just specify your preference when placing your order.</p>
            </div>
            <div className="faq-item">
              <h3>Can I customize my order?</h3>
              <p>Absolutely! Most of our items can be customized. Check the item description for available modifications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;