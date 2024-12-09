import React, { useState } from "react";
import Logo from "../Assets/logo.svg"; // Replace with your actual logo file
import { HiOutlineBars3 } from "react-icons/hi2"; // Mobile menu icon
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

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
      <div className="nav-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${openMenu ? "open" : ""}`}>
        <button
          className="close-menu"
          onClick={() => setOpenMenu(false)}
        >
          Close
        </button>
        <ul>
          {menuOptions.map((menu) => (
            <li key={menu.text}>
              <Link
                to={menu.path}
                className={`mobile-link ${
                  location.pathname === menu.path ? "active-link" : ""
                }`}
                onClick={() => setOpenMenu(false)}
              >
                {menu.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
