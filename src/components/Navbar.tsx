import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="/finalLogo.jpeg" alt="Medi Helps Logo" className="navbar__logo-img" />
        </Link>

        <button className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        <motion.div 
          className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}
          initial={false}
          animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
        >
          <Link 
            to="/" 
            className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar__link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`navbar__link ${location.pathname === '/services' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/projects" 
            className={`navbar__link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`navbar__link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
