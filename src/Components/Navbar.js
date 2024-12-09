import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
        <Link to="/">
          <img
            className="logo"
            src={require("../Assets/logo.svg").default} // Adjusted logo path
            alt="Giggles & Growth"
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-links-container">
        {menuOptions.map((menu) => (
          <Link key={menu.text} to={menu.path} className="nav-link">
            {menu.text}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="nav-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Drawer for Mobile */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((menu) => (
              <ListItem key={menu.text} disablePadding>
                <ListItemButton component={Link} to={menu.path}>
                  <ListItemText primary={menu.text} />
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
