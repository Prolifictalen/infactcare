import React, { useState } from "react";
import Logo from "../Assets/logo.svg"; // Replace with your actual logo file
import { HiOutlineBars3 } from "react-icons/hi2"; // Mobile menu icon
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";


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

      {/* Hamburger Menu Button */}
      <div className="nav-menu-container" onClick={() => setMenuOpen(!menuOpen)}>
        <HiOutlineBars3 aria-label="Menu button" />
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
