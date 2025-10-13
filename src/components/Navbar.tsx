import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { useTranslate } from '../hooks/useTranslate';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isMobile } = useBreakpoint();
  const { translate } = useTranslate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: "/", key: "nav-home" as const },
    { to: "/about", key: "nav-about" as const },
    { to: "/services", key: "nav-services" as const },
    { to: "/hospitals", key: "nav-hospitals" as const },
    { to: "/contact", key: "nav-contact" as const }
  ] as const;

  return (
    <motion.div 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }}
    >
      <div className="navbar__container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
        >
          <Link to="/" className="navbar__logo">
            <img src="../images/logo.png" alt="Medi Helps Logo" className="navbar__logo-img" />
          </Link>
        </motion.div>

        <motion.button 
          className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg viewBox='0 0 10 8' width='40'>
            <motion.path 
              d='M1 1h8M1 4h 8M1 7h8'
              stroke='#375af8ff'
              strokeWidth='2'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          </svg>
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        {isMobile ? (
          <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        ) : (
          <motion.div 
            className="navbar__menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`navbar__link ${location.pathname === item.to ? 'active' : ''}`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05, color: "#2563EB" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {translate(item.key)}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
