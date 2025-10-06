import React from 'react';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <h2>Let’s Start Your Journey</h2>
          <p>Our international patient desk is ready 24/7 to help you plan your treatment and travel.</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
