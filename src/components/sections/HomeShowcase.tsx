import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageStrip from '../ImageStrip';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import './HomeShowcase.css';

const HomeShowcase: React.FC = () => {
  const { isMobile, isTablet, isLaptop } = useBreakpoint();

  const showcaseStyles = {
    padding: isTablet ? '5rem 0'
      : isLaptop ? '6rem 0'
        : '0',
    paddingRight: !isMobile && !isTablet && !isLaptop ? '40px' : '0'
  };

  const titleStyles = {
    fontSize: isMobile ? '2rem'
      : isTablet ? '2.5rem'
        : isLaptop ? '2.75rem'
          : '3.5rem',
    textAlign: (isTablet || isLaptop || isMobile) ? 'center' as const : 'left' as const
  };

  const contentStyles = {
    display: 'grid',
    gridTemplateColumns: (isTablet || isLaptop || isMobile) ? '1fr' : '1fr 1fr',
    gap: isMobile ? '3rem' : '4rem',
    maxWidth: isLaptop ? '800px' : undefined,
    margin: isLaptop ? '0 auto' : undefined
  };

  const statsGridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr'
      : isTablet ? 'repeat(2, 1fr)'
        : 'repeat(3, 1fr)',
    gap: isMobile || isTablet ? '1rem' : '2rem',
    maxWidth: isMobile ? '280px'
      : isTablet ? '450px'
        : isLaptop ? '600px'
          : undefined,
    margin: (isTablet || isLaptop || isMobile) ? '0 auto' : undefined
  };

  return (
    <section className="showcase" id="home" style={showcaseStyles}>
      {!isMobile ? <ImageStrip /> : null}
      <div className="container">
        <div className="showcase-content" style={contentStyles}>
          <motion.div
            className="showcase-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: titleStyles.textAlign }}
          >
            <span className="badge" style={{ fontSize: isMobile ? '0.8rem' : '0.875rem' }}>
              Welcome to Medi Helps
            </span>
            <h1 style={titleStyles}>Modern Healthcare Solutions for Better Living</h1>
            <p className="lead" style={{
              fontSize: isTablet || isMobile ? '1rem' : '1.125rem',
              marginBottom: isTablet || isMobile ? '1.5rem' : '2rem'
            }}>
              Experience world-class healthcare consulting that transforms challenges into opportunities. We help healthcare providers optimize their operations and deliver better patient care.
            </p>
            <div className="showcase-buttons" style={{
              flexDirection: isTablet || isMobile ? 'column' as const : 'row' as const,
              gap: isTablet || isMobile ? '0.75rem' : '1rem',
              justifyContent: (isTablet || isLaptop || isMobile) ? 'center' : 'flex-start'
            }}>
            </div>
            <div style={statsGridStyles}>
              <div className="stat-card" style={{
                padding: isTablet ? '1rem' : isLaptop ? '1.25rem' : '1.5rem'
              }}>
                <h3 style={{ fontSize: isTablet ? '1.75rem' : '2rem' }}>95%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-card" style={{
                padding: isTablet ? '1rem' : isLaptop ? '1.25rem' : '1.5rem'
              }}>
                <h3 style={{ fontSize: isTablet ? '1.75rem' : '2rem' }}>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card" style={{
                padding: isTablet ? '1rem' : isLaptop ? '1.25rem' : '1.5rem'
              }}>
                <h3 style={{ fontSize: isTablet ? '1.75rem' : '2rem' }}>500+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;
