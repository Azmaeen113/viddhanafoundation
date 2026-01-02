import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";

// Convert the existing translations structure to react-i18next format
// Original structure: translations[section][language][key]
// Required structure: resources[language][translation][section][key]

function convertTranslationsToResources() {
  const languages = ['en', 'zh', 'hi', 'es', 'fr', 'vi', 'ja', 'ko'];
  const resources: Record<string, { translation: Record<string, any> }> = {};
  
  // Initialize each language
  languages.forEach(lang => {
    resources[lang] = { translation: {} };
  });
  
  // Convert structure for each section
  Object.entries(translations).forEach(([section, sectionData]) => {
    languages.forEach(lang => {
      if (sectionData[lang as keyof typeof sectionData]) {
        resources[lang].translation[section] = sectionData[lang as keyof typeof sectionData];
      }
    });
  });
  
  return resources;
}

const resources = convertTranslationsToResources();

const applyDocumentLanguageAttributes = (lng: string) => {
  if (typeof document === 'undefined') return;

  document.documentElement.lang = lng;
  document.documentElement.classList.toggle('lang-vi', lng === 'vi');
};

// Get stored language from localStorage or default to English
const storedLang = typeof window !== "undefined" 
  ? window.localStorage.getItem("viddhana-lang") 
  : null;

const initialLanguage = storedLang || "en";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
    },
  });

applyDocumentLanguageAttributes(initialLanguage);

// Save language to localStorage whenever it changes
i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("viddhana-lang", lng);
    applyDocumentLanguageAttributes(lng);
  }
});

export default i18n;
