import { useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import type { Language } from '../../types/translations';
import { useTranslate } from '../../hooks/useTranslate';
import './Footer.css';

const Footer = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { translate } = useTranslate();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="copyright">
          <span>© 2025 Medi Life. {translate('Footer-Rights')}</span>
        </div>
        <div className="language-selector">
          <label className="language-sele" htmlFor="language-sele">{translate('Footer-Language')}:</label>
          <select id="language-select" value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;