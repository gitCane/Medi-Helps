import { motion } from 'framer-motion';
import './Projects.css';

interface Project {
  image: string;
  title: string;
  description: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      image: '/images/project1.jpg',
      title: 'Modern Medical Center',
      description: 'Complete hospital management system implementation with digital transformation',
      category: 'Hospital Management'
    },
    {
      image: '/images/project2.jpg',
      title: 'Healthcare Analytics Platform',
      description: 'Data-driven insights platform for improving patient care quality',
      category: 'Analytics'
    },
    {
      image: '/images/project3.jpg',
      title: 'Medical Education Portal',
      description: 'Digital learning platform for medical professionals and students',
      category: 'Education'
    },
    {
      image: '/images/project4.jpg',
      title: 'Patient Care System',
      description: 'Integrated patient management and care coordination solution',
      category: 'Healthcare'
    },
    {
      image: '/images/project5.jpg',
      title: 'Diagnostic Center Solutions',
      description: 'Advanced diagnostic reporting and analysis system',
      category: 'Diagnostics'
    },
    {
      image: '/images/project6.jpg',
      title: 'Healthcare Security Suite',
      description: 'Comprehensive security solution for healthcare data protection',
      category: 'Security'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Our Projects</span>
          <h2 className="section-title">Recent Success Stories</h2>
          <p className="section-description">
            Discover how we've helped healthcare organizations transform their operations
            and deliver better patient care through innovative solutions.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <a href="#contact" className="btn btn-primary">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="btn btn-primary">View All Projects</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
