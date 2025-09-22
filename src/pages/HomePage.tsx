import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeShowcase from '../components/sections/HomeShowcase';
import './HomePage.css';

const HomePage: React.FC = () => {
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
              <h3>About Us</h3>
              <p>Learn more about our mission and values</p>
            </Link>
            <Link to="/services" className="quick-link-card">
              <h3>Our Services</h3>
              <p>Explore our healthcare solutions</p>
            </Link>
            <Link to="/projects" className="quick-link-card">
              <h3>Projects</h3>
              <p>View our successful implementations</p>
            </Link>
            <Link to="/contact" className="quick-link-card">
              <h3>Contact</h3>
              <p>Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomePage;
