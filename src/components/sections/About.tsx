import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <span className="section-subtitle">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-description">
           We connect international patients with India’s best hospitals, doctors, and treatment packages. Our mission is simple — bring you world-class healthcare at affordable rates, while giving you a smooth and stress-free experience from visa to recovery.
          </p>
        </div>
        
        <div className="about-grid">
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </motion.div>
            <h3>Hospital Management</h3>
            <p>Streamline operations and improve patient care with our comprehensive hospital management solutions.</p>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
               </svg>
            </motion.div>
            <h3>Accommodation & Stay</h3>
            <p>Comfortable and affordable stays for patients and families near hospitals.</p>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657A8 8 0 016.343 5.343m0 0A8 8 0 0017.657 16.657zM12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" />
                </svg> 
            </motion.div>
            <h3>Travel & Visa Assistance</h3>
            <p>Seamless medical visa guidance and travel planning for a smooth journey.</p>
          </motion.div>
        </div>

        <div className="about-features">
          <motion.div 
            className="feature-image"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0 
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.3
            }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="/images/aboutus.jpg" 
              alt="Healthcare Team"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="image-pattern"></div>
          </motion.div>
          
          <div className="feature-content">
            <h2>Why Choose Mehi Helps?</h2>
            <p>We combine industry expertise with innovative solutions to deliver exceptional results for our healthcare partners.</p>
            
            <div className="feature-list">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4>Trusted Expertise</h4>
                  <p>Over 10 years of experience in healthcare consulting</p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4>Innovative Solutions</h4>
                  <p>Cutting-edge technology and proven methodologies</p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Dedicated Support</h4>
                  <p>24/7 expert assistance and consultation</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
