import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// The Navbar appears on every page (it is rendered once in App.jsx).
// It uses useState to track whether the mobile menu is open,
// and NavLink from react-router so the active page link gets highlighted.
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Legal<span className="navbar-logo-accent">Ease</span>
        </Link>

        {/* Hamburger button, only visible on mobile via CSS */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
          >
            Find a Lawyer
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
