import React, { useState } from "react";
import Logo from "../Assets/logo.svg"; // Replace with your actual logo file
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

  return (
    <nav className="navbar">
      {/* Top Links Row */}
      <div className="nav-top-links">
        {menuOptions.map((menu) => (
          <Link
            key={menu.text}
            to={menu.path}
            className={`nav-top-link ${
              location.pathname === menu.path ? "active-link" : ""
            }`}
          >
            {menu.text}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="nav-logo-container">
        <img className="logo" src={Logo} alt="Giggles & Growth" />
      </div>

      {/* Mobile Menu Button */}
      <div className="nav-menu-container">
        <HiOutlineBars3
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        />
      </div>
      {/* Mobile Drawer Menu */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((menu) => (
              <ListItem key={menu.text} disablePadding>
                <ListItemButton component={Link} to={menu.path}>
                  <ListItemText
                    primary={menu.text}
                    className={`${
                      location.pathname === menu.path ? "active-link" : ""
                    }`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
