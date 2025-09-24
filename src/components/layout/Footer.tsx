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
      <div className="footer-grid">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>Mehi Life is one of the leading health care consultancies with a wide range of cross-disciplinary expertise across the healthcare value chain.</p>
          <div className="language-selector">
            <select value={language} onChange={handleLanguageChange}>
              <option value="english">English</option>
              <option value="russian">Русский</option>
              <option value="spanish">Español</option>
            </select>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul className="links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Career</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <address>
            <p><i className="fas fa-map-marker-alt"></i> Karawal Nagar<br />Uttar Pradesh, 201304</p>
            <p><i className="fas fa-phone"></i> +91 7030009558</p>
            <p><i className="fas fa-envelope"></i> info.mehilife@gmail.com</p>
          </address>
        </div>

        <div className="footer-form">
          <h4>Send us a message</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="query"
                placeholder="Your Message"
                value={formData.query}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2025 Mehi Life. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;