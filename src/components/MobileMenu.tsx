import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="mobile-menu__content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <button className="mobile-menu__close" onClick={onClose}>
              ✕
            </button>
            <div className="mobile-menu__links">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/hospitals", label: "Hospitals" },
                { to: "/contact", label: "Contact" }
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`mobile-menu__link ${location.pathname === link.to ? 'active' : ''}`}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;