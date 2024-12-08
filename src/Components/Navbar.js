import React, { useState } from "react";
import Logo from "../Assets/logo.svg"; // Replace with your actual logo file
import { HiOutlineBars3 } from "react-icons/hi2"; // Mobile menu icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const menuOptions = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Blog", path: "/blog" },
    { text: "Shopping", path: "/shopping" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo-container">
        <img className="logo" src={Logo} alt="Giggles & Growth" />
      </div>

      {/* Hamburger Menu Button */}
      <div className="nav-menu-container" onClick={() => setMenuOpen(!menuOpen)}>
        <HiOutlineBars3 aria-label="Open menu" />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="nav-menu-dropdown">
          {menuOptions.map((menu) => (
            <Link
              key={menu.text}
              to={menu.path}
              className="nav-link"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {menu.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
