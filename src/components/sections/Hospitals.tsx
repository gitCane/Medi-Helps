import { color, motion } from 'framer-motion';
import './Hospitals.css';

interface Hospital {
  image: string;
  title: string;
  description: string;
  category: string;
}

const Hospitals = () => {
  const hospitals: Hospital[] = [
    {
      image: '../../../public/images/apollo.jpeg',
      title: 'Apollo Hospitals',
      description: 'Leading multi-specialty hospital with state-of-the-art facilities and expert healthcare professionals',
      category: 'Multi-Specialty'
    },
    {
      image: '../../../public/images/fortis.jpeg',
      title: 'Fortis Healthcare',
      description: 'Renowned for advanced medical treatments and comprehensive patient care services',
      category: 'Super-Specialty'
    },
    {
      image: '../../../public/images/max.jpeg',
      title: 'Max Super Specialty Hospital',
      description: 'Excellence in healthcare with cutting-edge medical technology and experienced doctors',
      category: 'Super-Specialty'
    },
    {
      image: '../../../public/images/ambani.jpeg',
      title: 'Kokilaben Dhirubhai Ambani Hospital',
      description: 'World-class healthcare facility offering advanced medical treatments and research',
      category: 'Research & Care'
    },
    {
      image: '../../../public/images/aiims.jpeg',
      title: 'AIIMS Delhi',
      description: 'Premier government medical institution known for exceptional medical education and patient care',
      category: 'Government'
    },
    {
      image: '../../../public/images/manipal.jpeg',
      title: 'Manipal Hospitals',
      description: 'Integrated healthcare facility providing comprehensive medical services and specialized treatments',
      category: 'Multi-Specialty'
    }
  ];

  return (
    <section className="hospitals" id="hospitals">
      <div className="container">
        <motion.div 
          className="hospitals-header"
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

        <div className="hospitals-grid">
          {hospitals.map((hospital, index) => (
            <motion.div 
              key={index}
              className="hospital-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="hospital-image">
                <img src={hospital.image} alt={hospital.title} />
                <div className="hospital-overlay">
                  <span className="hospital-category">{hospital.category}</span>
                  <a href="#contact" style={{ color: 'white' }}>View Details</a>
                </div>
              </div>
              <div className="hospital-content">
                <h3>{hospital.title}</h3>
                <p>{hospital.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="hospitals-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="btn btn-primary">View All Hospitals</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hospitals;
