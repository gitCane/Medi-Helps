import { useContext } from 'react';
import type { TranslationKey, Language } from '../types/translations';
import { LanguageContext } from '../context/LanguageContext';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'Nav-Home': 'Home',
    'Nav-About': 'About',
    'Nav-Services': 'Services',
    'Nav-Hospitals': 'Hospitals',
    'Nav-Contact': 'Contact',
    'Home-Hero-Title': 'Your Health, Our Priority',
    'Home-Hero-Subtitle': 'We provide quality healthcare services',
    'Home-Hero-CTA': 'Get Started',
    'Footer-Language': 'Language',
    'Footer-Rights': 'All rights reserved'
  },
  es: {
    'Nav-Home': 'Inicio',
    'Nav-About': 'Sobre Nosotros',
    'Nav-Services': 'Servicios',
    'Nav-Hospitals': 'Hospitales',
    'Nav-Contact': 'Contacto',
    'Home-Hero-Title': 'Tu Salud, Nuestra Prioridad',
    'Home-Hero-Subtitle': 'Brindamos servicios de salud de calidad',
    'Home-Hero-CTA': 'Comenzar',
    'Footer-Language': 'Idioma',
    'Footer-Rights': 'Todos los derechos reservados'
  },
  ru: {
    'Nav-Home': 'Главная',
    'Nav-About': 'О нас',
    'Nav-Services': 'Услуги',
    'Nav-Hospitals': 'Больницы',
    'Nav-Contact': 'Контакты',
    'Home-Hero-Title': 'Ваше здоровье - наш приоритет',
    'Home-Hero-Subtitle': 'Мы предоставляем качественные медицинские услуги',
    'Home-Hero-CTA': 'Начать',
    'Footer-Language': 'Язык',
    'Footer-Rights': 'Все права защищены'
  }
};

export const useTranslate = () => {
  const { language } = useContext(LanguageContext);

  const translate = (key: TranslationKey): string => {
    const translation = translations[language as Language][key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  return { translate, language };
};