// Translation types and language codes
export type LanguageCode = 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'vi' | 'ja' | 'ko';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export interface TranslationSection {
  [key: string]: string | TranslationSection;
}

export interface PageTranslations {
  [key: string]: TranslationSection;
}

export interface Translations {
  [key: string]: PageTranslations;
}
