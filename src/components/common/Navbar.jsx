import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./Navbar.css";

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
        <Logo size="medium" onClick={closeMenu} />

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
            to="/guides"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
          >
            Legal Guides
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

          <div className="navbar-auth-section">
            <Link
              to="/login"
              onClick={closeMenu}
              className="navbar-login-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="navbar-user-icon"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Sign In</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
