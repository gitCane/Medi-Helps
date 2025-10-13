import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslate } from '../hooks/useTranslate';
import HomeShowcase from '../components/sections/HomeShowcase';
import './HomePage.css';

const HomePage: React.FC = () => {
  const { translate } = useTranslate();
  return (
    <>
      <HomeShowcase />
      <motion.section 
        className="home-quick-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container">
          <div className="quick-links-grid">
            <Link to="/about" className="quick-link-card">
              <h3>{translate('nav-about')}</h3>
              <p>{translate('home.quickLinks.about')}</p>
            </Link>
            <Link to="/services" className="quick-link-card">
              <h3>{translate('nav-services')}</h3>
              <p>{translate('home.quickLinks.services')}</p>
            </Link>
            <Link to="/projects" className="quick-link-card">
              <h3>{translate('nav-hospitals')}</h3>
              <p>{translate('home.quickLinks.hospitals')}</p>
            </Link>
            <Link to="/contact" className="quick-link-card">
              <h3>{translate('nav-contact')}</h3>
              <p>{translate('home.quickLinks.contact')}</p>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomePage;
