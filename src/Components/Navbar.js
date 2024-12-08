import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2"; // Mobile menu icon
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuOptions = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Blog", path: "/blog" },
    { text: "Shopping", path: "/shopping" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo-container">
        <img
          className="logo"
          src="/path-to-logo.svg"
          alt="Giggles & Growth"
        />
      </div>

      {/* Desktop Links */}
      <div className="nav-links-container">
        {menuOptions.map((menu) => (
          <Link
            key={menu.text}
            to={menu.path}
            className={`nav-link ${
              location.pathname === menu.path ? "active-link" : ""
            }`}
          >
            {menu.text}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="nav-menu-container" onClick={toggleMenu}>
        <HiOutlineBars3 aria-label="Toggle menu" />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`nav-menu-dropdown ${menuOpen ? "active" : ""}`}
      >
        {menuOptions.map((menu) => (
          <Link
            key={menu.text}
            to={menu.path}
            className={`nav-link ${
              location.pathname === menu.path ? "active-link" : ""
            }`}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            {menu.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
