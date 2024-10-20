/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../styles/NavBarStyles.css";

const NavBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(1);

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);
  const handleToggleSearch = () => setIsSearchVisible(!isSearchVisible);

  const handleWishlistClick = () => {
    setWishlistCount(wishlistCount + 1);
  };

  useEffect(() => {
    handleWishlistClick();
  }, [setWishlistCount]);

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <div className="logo">BrandName</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li
            className="shop-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/" className="shop-dropdown-link">
              Shop <i className="bi bi-caret-down"></i>
            </a>
            {isDropdownVisible && (
              <ul className="dropdown">
                <li>
                  <a href="/shop/clothing">Clothing</a>
                </li>
                <li>
                  <a href="/shop/accessories">Accessories</a>
                </li>
                <li>
                  <a href="/shop/shoes">Shoes</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/pages">Pages</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <i className="bi bi-person"></i>
        <a href="/login" className="login-register">
          Login / Register
        </a>

        <div className={`search-container ${isSearchVisible ? "active" : ""}`}>
          <button className="search-icon" onClick={handleToggleSearch}>
            <i className="bi bi-search"></i>
          </button>
          {isSearchVisible && (
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          )}
        </div>

        <div className="nav-icons">
          <a href="/cart" className="icon-container">
            <i className="bi bi-cart3 cart"></i>
            {cartCount > 0 && <span className="count-badge">{cartCount}</span>}
          </a>
          <a href="/wishlist" className="icon-container">
            <i className="far fa-heart" onClick={handleWishlistClick}></i>
            {wishlistCount > 0 && (
              <span className="count-badge">{wishlistCount}</span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
