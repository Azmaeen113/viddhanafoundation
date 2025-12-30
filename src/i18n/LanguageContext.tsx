import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { LanguageCode } from '../types/translations';
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from './languages';
import { translations } from './translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (path: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Language Provider Component
 * Manages language state and provides translation functionality
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // Load language from localStorage on initial mount
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode;
    return savedLanguage || DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    // Save language to localStorage whenever it changes
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language;
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language } }));
  }, [language]);

  /**
   * Translation function
   * @param path - Dot-separated path to translation (e.g., 'nav.home', 'home.hero.title')
   * @param fallback - Optional fallback text if translation is not found
   * @returns Translated string or fallback or the path itself
   */
  const t = (path: string, fallback?: string): string => {
    const keys = path.split('.');
    
    // Must have at least section.key (2 parts)
    if (keys.length < 2) {
      console.warn(`Invalid translation path: "${path}". Must have at least section.key format.`);
      return fallback || path;
    }

    // Get the section (first key)
    const section = keys[0];
    const remainingKeys = keys.slice(1);

    // Navigate to section
    if (!(section in translations)) {
      console.warn(`Translation section "${section}" not found`);
      return fallback || path;
    }

    let sectionData = translations[section];

    // Check if current language exists in this section
    if (!sectionData || typeof sectionData !== 'object' || !(language in sectionData)) {
      // Try English fallback
      if (language !== 'en' && sectionData && 'en' in sectionData) {
        console.warn(`Translation missing for "${path}" in language "${language}", using English fallback`);
        sectionData = { ...sectionData, [language]: sectionData.en };
      } else {
        console.warn(`Translation not found for section "${section}" in language "${language}"`);
        return fallback || path;
      }
    }

    // Get language-specific data
    let value: any = sectionData[language];

    // Navigate through remaining keys
    for (const key of remainingKeys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // Key not found, try English fallback
        if (language !== 'en' && sectionData.en) {
          let englishValue: any = sectionData.en;
          for (const k of remainingKeys) {
            if (englishValue && typeof englishValue === 'object' && k in englishValue) {
              englishValue = englishValue[k];
            } else {
              console.warn(`Translation not found for path: "${path}" in any language`);
              return fallback || path;
            }
          }
          console.warn(`Translation missing for "${path}" in language "${language}", using English fallback`);
          return typeof englishValue === 'string' ? englishValue : (fallback || path);
        }
        
        console.warn(`Translation not found for path: "${path}" in language "${language}"`);
        return fallback || path;
      }
    }

    // Return the final value if it's a string
    if (typeof value === 'string') {
      return value;
    }

    console.warn(`Translation at "${path}" is not a string`);
    return fallback || path;
  };

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

/**
 * Hook to use language context
 * @returns Language context with language state and translation function
 * @throws Error if used outside of LanguageProvider
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Hook to get translation function only
 * Convenience hook for components that only need translations
 */
export const useTranslation = () => {
  const { t } = useLanguage();
  return { t };
};
