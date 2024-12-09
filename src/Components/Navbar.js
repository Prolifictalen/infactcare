import React, { useState, useEffect } from "react";
import Logo from "../Assets/logo.svg"; // Replace with your actual logo file
import { HiOutlineBars3 } from "react-icons/hi2"; // Mobile menu icon
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const menuOptions = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Blog", path: "/blog" },
    { text: "Shopping", path: "/shopping" },
  ];

  // Function to detect screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile (e.g., 768px)
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo-container">
        <img className="logo" src={Logo} alt="Giggles & Growth" />
      </div>

      {/* Desktop Links (Visible only on Desktop) */}
      {!isMobile && (
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
      )}

      {/* Mobile Menu Button (Visible only on Mobile) */}
      {isMobile && (
        <div className="nav-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
      )}

      {/* Mobile Drawer Menu */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{
            width: '100%',
            padding: '20px',
          }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            {menuOptions.map((menu) => (
              <ListItem key={menu.text} disablePadding>
                <ListItemButton component={Link} to={menu.path}>
                  <ListItemText
                    primary={menu.text}
                    className={`${
                      location.pathname === menu.path ? "active-link" : ""
                    }`}
                    sx={{
                      textAlign: 'center',
                      color: location.pathname === menu.path ? '#734c29' : '#4c4c4c',
                      fontWeight: location.pathname === menu.path ? 'bold' : '500',
                      fontSize: '18px',
                      '&:hover': {
                        color: '#734c29',
                      },
                    }}
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
