import React from 'react';
import "../Style.css"
import navlogo from "../Assets/logo.svg"
import carticon from "../Assets/cart-icon.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <div className="nav-logo">
          <img src={navlogo} alt="Logo" className="nav-logo-img" />
          <span className="nav-logo-text">Musicart</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Invoice</a>
        </div>
      </div>
      <div className="nav-actions">
        <button className="cart-button">
          <img src={carticon} alt="Cart Icon" className="cart-icon" />
          View Cart
          <span className="cart-count">0</span>
        </button>
        <div className="profile-icon">DR</div>
      </div>
    </nav>
  );
};

export default Navbar;
