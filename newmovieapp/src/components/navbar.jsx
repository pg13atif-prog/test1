import { useState, useEffect } from 'react';
import './Navbar.css';

/**
 * Navbar Component
 * Sticky glassmorphism navigation bar with logo, nav links, search & profile.
 * Darkens on scroll for better contrast.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* ── Logo ── */}
      <a href="/" className="navbar__logo" id="navbar-logo" aria-label="CINEBY Home">
        <span className="navbar__logo-text">CINEBY</span>
      </a>

      {/* ── Navigation Links ── */}
      <ul className="navbar__nav" id="navbar-links">
        <li>
          <a href="#" className="navbar__link navbar__link--active" id="nav-home">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link" id="nav-movies">
            Movies
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link" id="nav-tvshows">
            TV Shows
          </a>
        </li>
      </ul>

      {/* ── Right: Search + Profile ── */}
      <div className="navbar__actions" id="navbar-actions">
        {/* Search Button */}
        <button
          className="navbar__action-btn"
          id="btn-search"
          aria-label="Search"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        {/* Profile Avatar */}
        <button
          className="navbar__profile"
          id="btn-profile"
          aria-label="Profile"
          type="button"
        >
          A
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
