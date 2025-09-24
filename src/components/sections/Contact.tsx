import { type FormEvent, type ChangeEvent, useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We will contact you soon.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact" id="contact">
      <div className="containerContact">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Let's Connect</h3>
          <p>Get in touch with us for any questions about our services or to schedule a consultation.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Karawal Nagar, Uttar Pradesh, 110090</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 9873790001</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info.mehilife@gmail.com</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-header">
            <h2 className="contact-title">CONNECT WITH US</h2>
            <p className="contact-description">We will get in touch with you shortly</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone no."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group message">
              <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="connect-button">
              CONNECT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
