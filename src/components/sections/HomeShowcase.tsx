import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageStrip from '../ImageStrip';
import './HomeShowcase.css';

const HomeShowcase: React.FC = () => {
  return (
    <section className="showcase" id="home">
      <ImageStrip />
      <div className="container">
        <div className="showcase-content">
          <motion.div
            className="showcase-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Welcome to Medi Helps</span>
            <h1> Why India? Why Medi-Helps?</h1>
            <p className="lead">
               Because world-class healthcare shouldn’t cost a fortune.  
        India offers advanced medical technology, globally trained doctors,  
        and premium care — at a price that’s 60-80% lower than most countries.  
        Medi-Helps makes the entire process seamless for you.
            </p>
            <div className="showcase-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              {/* <Link to="/services" className="btn btn-outline">Our Services</Link> */}
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>95%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-card">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="showcase-media"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.div>
        </div>
      </div>
      <div className="showcase-shape">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#146648"//change color to rolex green
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeShowcase;
