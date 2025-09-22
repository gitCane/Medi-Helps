import React from 'react';
import Projects from '../components/sections/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Discover our successful healthcare implementations and case studies</p>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
