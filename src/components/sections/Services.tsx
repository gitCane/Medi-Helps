import React from 'react';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import './Services.css';

interface ServiceCard {
  icon: ReactElement;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: ServiceCard[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Healthcare Analytics',
      description: 'Transform your healthcare data into actionable insights with our advanced analytics solutions.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Hospital Management',
      description: 'Streamline operations and improve patient care with our comprehensive management solutions.'
    },
    {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
      </svg>
      ),
      title: 'Accommodation & Stay',
      description: 'Comfortable, safe, and affordable stay options for patients and their families near top hospitals.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657A8 8 0 016.343 5.343m0 0A8 8 0 0017.657 16.657zM12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" />
      </svg>
      ),
      title: 'Travel & Visa Assistance',
      description: 'End-to-end support with medical visa processing, travel arrangements, and smooth arrival in India.'
    },
    {
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4m6 6H6a2 2 0 01-2-2V6a2 2 0 012-2h6l6 6v8z" />
      </svg>
      ),
      title: 'Language & Interpretation services',
      description: 'Professional interpreters to overcome language barriers and make communication easy with doctors.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l1 6h12l1-6h2M5 13V7a2 2 0 012-2h10a2 2 0 012 2v6M9 21h6" />
      </svg>
      ),
      title: 'Local Transport & Hospitality',
      description: 'Hassle-free airport pickups, hospital transfers, and guided support for daily needs.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Comprehensive Healthcare Solutions</h2>
          <p className="section-description">
            We offer a wide range of healthcare consulting services to help organizations 
            optimize their operations and deliver better patient care.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card
                variant="elevated"
                className="service-card"
              >
                <div className="service-content">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-hover">
                    <Link to="/contact" className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
