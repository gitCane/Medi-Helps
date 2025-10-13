import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HospitalsPage from './pages/HospitalsPage';
import ContactPage from './pages/ContactPage';
import { LanguageProvider } from './context/LanguageContext';
import './styles/variables.css';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Set language parameter from localStorage or default to 'en'
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const storedLang = localStorage.getItem('preferredLanguage');
    
    if (!params.has('lang')) {
      // Use stored language or default to 'en'
      const langToSet = storedLang || 'en';
      params.set('lang', langToSet);
      navigate({ search: params.toString() }, { replace: true });
    } else {
      // Update localStorage when URL parameter changes
      const currentLang = params.get('lang');
      localStorage.setItem('preferredLanguage', currentLang || 'en');
    }
  }, [location.search]);

  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
};

export default App;
