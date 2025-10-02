import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../hooks/useBreakpoint';
import MobileMenu from './MobileMenu';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isMobile } = useBreakpoint();

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

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, color: "#2563EB" }
  };

  return (
    <motion.div 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="Medi Helps Logo" className="navbar__logo-img" />
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
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/hospitals", label: "Hospitals" },
              { to: "/contact", label: "Contact" }
            ].map((item, index) => (
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
                    {item.label}
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
