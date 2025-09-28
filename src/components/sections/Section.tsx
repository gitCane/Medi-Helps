import React from 'react';
import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;