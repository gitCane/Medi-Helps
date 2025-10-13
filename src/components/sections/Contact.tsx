import { type FormEvent, type ChangeEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslate } from '../../hooks/useTranslate';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { translate } = useTranslate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      await emailjs.send(
        'service_8tq6xl3', // EmailJS service ID
        'template_7btaaih', // EmailJS template ID
        templateParams,
        'lLH6--0YXEhBlso6i' // EmailJS public key
      );

      alert(translate('contact.form.successMessage').replace('{name}', formData.name));
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert(translate('contact.form.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
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
          <h3>{translate('contact.title')}</h3>
          <p>{translate('contact.subtitle')}</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{translate('contact.address')}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>{translate('contact.phone')}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>mehi.helps@gmail.com</span>
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
            <h2 className="contact-title">{translate('contact.form.header')}</h2>
            <p className="contact-description">{translate('contact.form.subheader')}</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={translate('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={translate('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={translate('contact.form.phone')}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group message">
              <textarea
                name="message"
                placeholder={translate('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="connect-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? translate('contact.form.sending') : translate('contact.form.submit')}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
