import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/sections/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Our Services</h1>
            <p>Explore our comprehensive healthcare solutions</p>
          </motion.div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
