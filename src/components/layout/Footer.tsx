import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [language, setLanguage] = useState('english');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="copyright">
          <span>Copyright © 2025 Mehi Life. All Rights Reserved</span>
        </div>
        <div className="language-selector">
          <select value={language} onChange={handleLanguageChange}>
            <option value="english">English</option>
            <option value="russian">Русский</option>
            <option value="spanish">Español</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;