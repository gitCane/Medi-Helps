import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import en from '../translations/en.json';
import es from '../translations/es.json';
import ru from '../translations/ru.json';

const translations = { en, es, ru } as const;

type Languages = keyof typeof translations;

export const useTranslate = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentLang = (params.get('lang') || 'en') as Languages;

  const translate = useCallback(
    (key: string) => {
      const parts = key.split('.');
      let result: any = translations[currentLang];
      for (const part of parts) {
        result = result[part];
        if (result === undefined) return key; // Fallback to key if translation not found
      }
      return result as string;
    },
    [currentLang]
  );

  return { translate, currentLang };
};