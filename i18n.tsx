// i18n.tsx
import React, { createContext, useState, useContext, useMemo, FC, ReactNode } from 'react';
import { translations } from './translations';

// Define the available locales as a type
export type Locale = keyof typeof translations;

export const availableLocales = Object.keys(translations) as Locale[];

// Derive the keys from the English translations object to ensure type safety
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  availableLocales: Locale[];
  // The 't' function can return a string for simple translations,
  // or an array of strings (for things like motivational quotes).
  t: (key: TranslationKey, options?: { [key: string]: string | number }) => string | string[];
}

// Create a context with an undefined default value.
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // State to hold the current language.
  // It tries to load the preference from localStorage, defaulting to 'en'.
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const savedLang = localStorage.getItem('app-lang');
      // Ensure the saved language is a valid one before using it.
      return (savedLang && Object.keys(translations).includes(savedLang)) ? savedLang as Locale : 'en';
    } catch (error) {
      console.error("Could not access localStorage:", error);
      return 'en';
    }
  });

  // Function to change the language and persist it to localStorage.
  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem('app-lang', newLocale);
    } catch (error) {
      console.error("Could not save to localStorage:", error);
    }
    setLocaleState(newLocale);
  };

  // The core translation function.
  const t = (key: TranslationKey, options?: { [key: string]: string | number }): string | string[] => {
    // Fallback to English if the current locale is missing translations.
    const langTranslations = translations[locale] || translations.en;
    const translation = langTranslations[key] || translations.en[key];

    // If the translation is an array (like quotes), return it directly.
    if (Array.isArray(translation)) {
        return translation;
    }
    
    // FIX: Refactored to correctly narrow the type to a string before processing interpolations, fixing a type error.
    let text: string = translation;
    
    // Handle interpolation for dynamic values (e.g., {{count}}).
    if (options) {
      Object.keys(options).forEach(optionKey => {
        const regex = new RegExp(`{{${optionKey}}}`, 'g');
        text = text.replace(regex, String(options[optionKey]));
      });
    }

    return text;
  };
  
  // Memoize the context value to prevent unnecessary re-renders.
  const contextValue = useMemo(() => ({ locale, setLocale, t, availableLocales }), [locale]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to easily access the translation context.
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};