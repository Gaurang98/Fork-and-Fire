import React, { useState } from 'react';

const Profile = () => {
  // Sample user data - in a real app, this would come from authentication/database
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: '123 Main Street, New Delhi, India',
    joinDate: 'January 2024'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...userInfo });

  // Order history sample data
  const orderHistory = [
    {
      id: '#ORD-001',
      date: '2024-09-20',
      items: ['Margherita Pizza', 'Chocolate Cake'],
      total: 848,
      status: 'Delivered'
    },
    {
      id: '#ORD-002', 
      date: '2024-09-18',
      items: ['Classic Burger', 'Ice Cream Sundae'],
      total: 598,
      status: 'Delivered'
    },
    {
      id: '#ORD-003',
      date: '2024-09-15',
      items: ['Spaghetti Carbonara'],
      total: 549,
      status: 'Delivered'
    }
  ];

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUserInfo({ ...editForm });
    } else {
      // Start editing
      setEditForm({ ...userInfo });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancelEdit = () => {
    setEditForm({ ...userInfo });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {userInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div className="profile-info">
            <h1>My Profile</h1>
            <p>Member since {userInfo.joinDate}</p>
          </div>
        </div>

        {/* Personal Information Section */}
        <section className="profile-section">
          <div className="section-header">
            <h2>Personal Information</h2>
            <button 
              className={`edit-btn ${isEditing ? 'save' : 'edit'}`}
              onClick={handleEditToggle}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
            {isEditing && (
              <button className="cancel-btn" onClick={handleCancelEdit}>
                Cancel
              </button>
            )}
          </div>

          <div className="info-grid">
            <div className="info-item">
              <label>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              ) : (
                <span>{userInfo.name}</span>
              )}
            </div>

            <div className="info-item">
              <label>Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              ) : (
                <span>{userInfo.email}</span>
              )}
            </div>

            <div className="info-item">
              <label>Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              ) : (
                <span>{userInfo.phone}</span>
              )}
            </div>

            <div className="info-item full-width">
              <label>Delivery Address</label>
              {isEditing ? (
                <textarea
                  value={editForm.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows="3"
                />
              ) : (
                <span>{userInfo.address}</span>
              )}
            </div>
          </div>
        </section>

        {/* Order History Section */}
        <section className="profile-section">
          <h2>Order History</h2>
          <div className="orders-list">
            {orderHistory.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <span className="order-id">{order.id}</span>
                  <span className="order-date">{order.date}</span>
                  <span className={`order-status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
                <div className="order-items">
                  <p><strong>Items:</strong> {order.items.join(', ')}</p>
                </div>
                <div className="order-total">
                  <strong>Total: ₹{order.total}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Account Actions */}
        <section className="profile-section">
          <h2>Account Actions</h2>
          <div className="action-buttons">
            <button className="action-btn secondary">Change Password</button>
            <button className="action-btn secondary">Download Data</button>
            <button className="action-btn danger">Delete Account</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;