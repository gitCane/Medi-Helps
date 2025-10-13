import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { Language } from '../types/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [language, setLanguageState] = useState<Language>(() => {
    // First check URL param
    const urlLang = searchParams.get('lang') as Language;
    if (urlLang && ['en', 'es', 'ru'].includes(urlLang)) {
      return urlLang;
    }
    // Then check localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es', 'ru'].includes(savedLanguage)) {
      return savedLanguage;
    }
    // Default to English
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    // Update URL query parameter
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set('lang', newLang);
    navigate({ search: newSearchParams.toString() }, { replace: true });
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Listen for URL parameter changes
  useEffect(() => {
    const urlLang = searchParams.get('lang') as Language;
    if (urlLang && ['en', 'es', 'ru'].includes(urlLang) && urlLang !== language) {
      setLanguageState(urlLang);
    }
  }, [location.search]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};