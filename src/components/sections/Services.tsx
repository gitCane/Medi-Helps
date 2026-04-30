import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslate } from '../../hooks/useTranslate';
import { Card } from '../ui/Card';
import './Services.css';

interface ServiceCard {
  icon: ReactElement;
  key: 'analytics' | 'management' | 'security' | 'metrics' | 'education' | 'care';
}

const Services: React.FC = () => {
  const { translate } = useTranslate();
  const [activeTreatment, setActiveTreatment] = useState('tab1');
  const asset = (path: string) => new URL(`../../../IMG/${path}`, import.meta.url).href;
  
  interface Treatment {
    id: string;
    title: string;
    icon: string;
    image: string;
    description: string;
  }

  const treatments: Treatment[] = [
    {
      id: 'tab1',
      title: 'Cardiac Sciences',
      icon: asset('cardic.png'),
      image: asset('cardiac-science-1_0.jpg'),
      description: 'Diagnosis and treatment of heart-related conditions including coronary artery disease, arrhythmias, heart failure, and hypertension.',
      },
    {
      id: 'tab2',
      title: 'Oncology',
      icon: asset('dedicated_0.png'),
      image: asset('oncology-1_1.jpg'),
      description: 'Comprehensive cancer care with chemotherapy, radiation therapy, targeted therapy, and surgical support.'
    },
    {
      id: 'tab3',
      title: 'Neurology',
      icon: asset('neurology.png'),
      image: asset('neurology-1_0.jpg'),
      description: 'Advanced treatments for brain and nervous system disorders including stroke, epilepsy, and movement disorders.'
    },
    {
      id: 'tab4',
      title: 'Spine Surgery',
      icon: asset('orthopaedics_0_0.png'),
      image: asset('orthopaedics-1_0.jpg'),
      description: 'Surgical and non-surgical treatment for spinal disorders, scoliosis, herniated discs, and spinal instability.'
    },
    {
      id: 'tab5',
      title: 'Dentistry',
      icon: asset('ent.png'),
      image: asset('plastic-surgery-1_0.jpg'),
      description: 'Complete dental care including restorative, cosmetic, and surgical dentistry for healthy, confident smiles.'
    },
    {
      id: 'tab6',
      title: 'Orthopaedics',
      icon: asset('orthopaedics_0_0.png'),
      image: asset('orthopaedics-1_0.jpg'),
      description: 'Treatment of bone, joint, and musculoskeletal disorders, including sports injuries and joint replacement.'
    },
    {
      id: 'tab7',
      title: 'Organ Transplants',
      icon: asset('heart.png'),
      image: asset('transplant-1_0.jpg'),
      description: 'Pre-transplant evaluation, surgery, and post-transplant care for kidney, liver, heart, and more.'
    },
    {
      id: 'tab8',
      title: 'Gastroenterology',
      icon: asset('gastroenterology.png'),
      image: asset('gastroenterology-1_0.jpg'),
      description: 'Care for digestive health, liver disorders, and gastrointestinal conditions with advanced diagnostics.'
    },
    {
      id: 'tab9',
      title: 'Smile Design Dentistry',
      icon: asset('gynaecologist_0.png'),
      image: asset('ent-1.jpg'),
      description: 'Cosmetic smile design and restorative dentistry to create beautiful, natural smiles.'
    },
    {
      id: 'tab10',
      title: 'Cosmetology',
      icon: asset('gynaecologist_0.png'),
      image: asset('plastic-surgery-1_0.jpg'),
      description: 'Aesthetic and reconstructive treatments including advanced skin, body, and facial procedures.'
    }
  ];

  const selectedTreatment = treatments.find(treatment => treatment.id === activeTreatment) || treatments[0];
  
  const services: ServiceCard[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      key: 'analytics'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      key: 'management'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      key: 'security'
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
          <span className="section-subtitle">{translate('services.network')}</span>
          <h2 className="section-title">{translate('services.title')}</h2>
          <p className="section-description">{translate('services.description')}</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map(service => (
            <motion.div
              key={service.key}
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
                  <h3>{translate(`services.list.${service.key}.title`)}</h3>
                  <p>{translate(`services.list.${service.key}.description`)}</p>
                  <div className="service-hover">
                    <Link to="/contact" className="btn btn-primary">
                      {translate('services.learnMore')}
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          className="treatments-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="treatments-header">
            <h2 className="section-title">{translate('services.treatments.subtitle')}</h2>
            <p className="section-description">{translate('services.treatments.description')}</p>
          </div>
          <div className="treatments-layout">
            <div className="treatments-card-full">
              <div className="treatments-card-sidebar">
                <ul>
                  {treatments.map((treatment) => (
                    <li key={treatment.id}>
                      <button
                        type="button"
                        className={activeTreatment === treatment.id ? 'tab-button active' : 'tab-button'}
                        onClick={() => setActiveTreatment(treatment.id)}
                      >
                        <img src={treatment.icon} alt={treatment.title} />
                        <span>{treatment.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="treatments-card-detail">
                <div className="treatments-card-image">
                  <img src={selectedTreatment.image} alt={selectedTreatment.title} loading="lazy" />
                  <div className="treatments-card-label">{selectedTreatment.title}</div>
                </div>
                <div className="treatments-card-body">
                  <p>{selectedTreatment.description}</p>
                  <Link to="/contact" className="btn btn-primary treatments-cta">
                    {translate('services.contactCareTeam')}
                  </Link>
                </div>
              </div>
            </div>
            <aside className="visa-support-panel">
              <div className="visa-support-card">
                <h3>{translate('services.international.title')}</h3>
                <p>{translate('services.international.description')}</p>
                <div className="visa-links">
                  <a href="/contact" className="visa-link">{translate('services.international.contactDesk')}</a>
                </div>
                <div className="visa-cards">
                  <div className="visa-card">
                    <div className="visa-card-icon">🛂</div>
                    <div>
                      <h4>{translate('services.international.visaSupport')}</h4>
                    </div>
                  </div>
                  <div className="visa-card">
                    <div className="visa-card-icon">✈️</div>
                    <div>
                      <h4>{translate('services.international.airportPickup')}</h4>
                    </div>
                  </div>
                  <div className="visa-card">
                    <div className="visa-card-icon">🤝</div>
                    <div>
                      <h4>{translate('services.international.coordinators')}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Services;
