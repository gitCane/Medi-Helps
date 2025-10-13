import { motion } from 'framer-motion';
import { useTranslate } from '../../hooks/useTranslate';
import './Hospitals.css';

interface Hospital {
  image: string;
  key: 'apollo' | 'fortis' | 'max' | 'ambani' | 'aiims' | 'manipal';
  name: string;
}

const Hospitals = () => {
  const { translate } = useTranslate();
  
  const hospitals: Hospital[] = [
    {
      image: '../../../public/images/apollo.jpeg',
      key: 'apollo',
      name: 'Apollo Hospitals'
    },
    {
      image: '../../../public/images/fortis.jpeg',
      key: 'fortis',
      name: 'Fortis Healthcare'
    },
    {
      image: '../../../public/images/max.jpeg',
      key: 'max',
      name: 'Max Super Specialty Hospital'
    },
    {
      image: '../../../public/images/ambani.jpeg',
      key: 'ambani',
      name: 'Kokilaben Dhirubhai Ambani Hospital'
    },
    {
      image: '../../../public/images/aiims.jpeg',
      key: 'aiims',
      name: 'AIIMS Delhi'
    },
    {
      image: '../../../public/images/manipal.jpeg',
      key: 'manipal',
      name: 'Manipal Hospitals'
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
          <span className="section-subtitle">{translate('hospitals.network')}</span>
          <h2 className="section-title">{translate('hospitals.title')}</h2>
          <p className="section-description">{translate('hospitals.description')}</p>
        </motion.div>

        <div className="hospitals-grid">
          {hospitals.map((hospital, index) => (
            <motion.div 
              key={hospital.key}
              className="hospital-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="hospital-image">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                />
                <div className="hospital-overlay">
                  <span className="hospital-category">
                    {translate(`hospitals.list.${hospital.key}.category`)}
                  </span>
                  <a href="#contact" style={{ color: 'white' }}>
                    {translate('hospitals.viewDetails')}
                  </a>
                </div>
              </div>
              <div className="hospital-content">
                <h3>{hospital.name}</h3>
                <p>{translate(`hospitals.list.${hospital.key}.description`)}</p>
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
          <a href="#contact" className="btn btn-primary" style={{color: 'green'}}>{translate('hospitals.viewAll')}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hospitals;
