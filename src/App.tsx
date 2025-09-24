import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HospitalsPage from './pages/HospitalsPage';
import ContactPage from './pages/ContactPage';
import './styles/variables.css';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
