import React from 'react';
import About from '../components/sections/About';

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our mission, values, and commitment to healthcare excellence</p>
        </div>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;
