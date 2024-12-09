import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2"; // Mobile menu icon
import { Link } from "react-router-dom";

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
      {/* Hamburger Icon */}
      <div className="nav-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(!openMenu)} />
      </div>

      {/* Drawer Menu */}
      <div className={`mobile-menu ${openMenu ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setOpenMenu(false)}>
          Close
        </button>
        <ul>
          {menuOptions.map((menu) => (
            <li key={menu.text}>
              <Link
                to={menu.path}
                className="mobile-link"
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
