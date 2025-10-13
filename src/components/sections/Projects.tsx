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
      image: 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/locations/chennai_greams.jpg',
      title: 'Apollo Hospitals',
      description: 'Leading multi-specialty hospital with state-of-the-art facilities and expert healthcare professionals',
      category: 'Multi-Specialty'
    },
    {
      image: 'https://www.fortishealthcare.com/india/-/media/project/fortis-healthcare/fortis-healthcare/home-page/network-hospital/fortis-memorial-research-institute-delhi-ncr-gurugram.jpg',
      title: 'Fortis Healthcare',
      description: 'Renowned for advanced medical treatments and comprehensive patient care services',
      category: 'Super-Specialty'
    },
    {
      image: 'https://www.maxhealthcare.in/img/hospital-unit-img/max-super-speciality-hospital-saket.jpg',
      title: 'Max Super Specialty Hospital',
      description: 'Excellence in healthcare with cutting-edge medical technology and experienced doctors',
      category: 'Super-Specialty'
    },
    {
      image: 'https://www.kokilabenhospital.com/assets/images/slider/slide1.jpg',
      title: 'Kokilaben Dhirubhai Ambani Hospital',
      description: 'World-class healthcare facility offering advanced medical treatments and research',
      category: 'Research & Care'
    },
    {
      image: 'https://www.medicinenet.com/images/article/main_image/hospital-room-1.jpg',
      title: 'AIIMS Delhi',
      description: 'Premier government medical institution known for exceptional medical education and patient care',
      category: 'Government'
    },
    {
      image: 'https://www.manipalhospitals.com/uploads/locations/18fccf975cc3e76a61080271ff29e346.jpg',
      title: 'Manipal Hospitals',
      description: 'Integrated healthcare facility providing comprehensive medical services and specialized treatments',
      category: 'Multi-Specialty'
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
          <span className="section-subtitle">Our Network Hospitals</span>
          <h2 className="section-title">Leading Healthcare Facilities</h2>
          <p className="section-description">
            Explore our network of prestigious hospitals providing world-class healthcare
            services with cutting-edge medical technology and expert medical professionals.
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
                  <a href="#contact" className="btn btn-outline" style={{color: 'green'}}>View Details</a>
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
