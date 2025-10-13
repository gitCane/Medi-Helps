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

  // Set default language parameter if none exists
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (!params.has('lang')) {
      params.set('lang', 'en');
      navigate({ search: params.toString() }, { replace: true });
    }
  }, []);

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
