import React from 'react';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our healthcare consulting experts</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
