# Multi-Language Implementation Guide

## Overview
A complete multi-language system has been implemented for the Viddhana Foundation website with support for 8 languages:
- English (en) - Default
- Chinese Simplified (zh)
- Hindi (hi)
- Spanish (es)
- French (fr)
- Vietnamese (vi)
- Japanese (ja)
- Korean (ko)

## System Architecture

### 1. Core Files Created

#### Translation Infrastructure
- **`src/types/translations.ts`** - TypeScript type definitions for language system
- **`src/i18n/languages.ts`** - Language metadata (names, flags, codes)
- **`src/i18n/translations.ts`** - All translation strings organized by language and section
- **`src/i18n/LanguageContext.tsx`** - React context for language state management

#### Components
- **`src/components/LanguageSelector.tsx`** - Language dropdown selector component

## How to Use Translations in Components

### Step 1: Import the Hook
```tsx
import { useTranslation } from '@/i18n/LanguageContext';
```

### Step 2: Use in Your Component
```tsx
export function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.subtitle')}</p>
      <button>{t('home.hero.cta')}</button>
    </div>
  );
}
```

### Step 3: Access Nested Translations
Translation keys use dot notation to navigate the nested structure:
```tsx
t('nav.home')              // Navigation item
t('home.hero.title')       // Homepage hero title
t('home.features.title')   // Features section title
t('footer.copyright')      // Footer copyright text
t('common.loading')        // Common UI text
```

## Translation Structure

Translations are organized hierarchically:
```
translations
├── nav              (Navigation menu items)
├── home             (Homepage content)
│   ├── hero
│   ├── features
│   ├── stats
│   └── cta
├── footer           (Footer content)
└── common           (Shared UI elements)
```

## Adding New Translations

### Method 1: Add to Existing Section
Edit `src/i18n/translations.ts`:

```typescript
export const translations = {
  home: {
    en: {
      hero: {
        title: 'Welcome',
        // Add your new key here
        newKey: 'New English text',
      }
    },
    zh: {
      hero: {
        title: '欢迎',
        // Add Chinese translation
        newKey: '新的中文文本',
      }
    },
    // Repeat for all languages...
  }
};
```

### Method 2: Add New Section
```typescript
export const translations = {
  // ...existing translations
  
  // New section
  newSection: {
    en: {
      title: 'Section Title',
      description: 'Section description',
    },
    zh: {
      title: '部分标题',
      description: '部分描述',
    },
    // Add all other languages...
  }
};
```

## Language Switching

### Automatic Features
- Selected language is automatically saved to `localStorage`
- Language persists across page navigation
- HTML `lang` attribute updates automatically
- Custom event dispatched on language change

### Manual Language Change
```tsx
import { useLanguage } from '@/i18n/LanguageContext';

function MyComponent() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button onClick={() => setLanguage('es')}>
      Switch to Spanish
    </button>
  );
}
```

## Translation Function Features

### Basic Usage
```tsx
const text = t('home.hero.title');
```

### With Fallback
```tsx
const text = t('home.hero.newKey', 'Default fallback text');
```

### Error Handling
- Missing translation key → Returns the key itself or fallback
- Missing language → Falls back to English
- Console warnings in development for missing translations

## Example: Updating a Page Component

### Before (Hardcoded English)
```tsx
export function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to Viddhana Foundation</p>
      <button>Learn More</button>
    </div>
  );
}
```

### After (Multi-language)
```tsx
import { useTranslation } from '@/i18n/LanguageContext';

export function About() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.welcome')}</p>
      <button>{t('about.learnMore')}</button>
    </div>
  );
}
```

## Best Practices

### 1. Naming Conventions
- Use camelCase for translation keys
- Use descriptive, hierarchical keys: `section.subsection.element`
- Keep common UI text in the `common` section

### 2. Organization
- Group related translations together
- Create new sections for different pages
- Maintain consistent structure across all languages

### 3. Content Guidelines
- Keep translations contextually appropriate
- Maintain consistent tone across languages
- Preserve brand names and technical terms
- Use native speakers for professional translations

### 4. Performance
- Translations are loaded once on app initialization
- Language switching is instant (< 100ms)
- No additional network requests

## Components Already Updated

✅ **Navbar** - All navigation links translated  
✅ **Footer** - Footer content and links translated  
✅ **LanguageSelector** - Language switcher added to navigation  
✅ **App.tsx** - Wrapped with LanguageProvider

## Components to Update

To fully implement translations, update these components:

1. **Pages** (use the pattern shown above):
   - Index.tsx (Homepage)
   - About.tsx
   - Technology.tsx
   - Ecosystem.tsx
   - Tokenomics.tsx
   - Roadmap.tsx
   - DAO.tsx
   - Whitepaper.tsx
   - Contact.tsx
   - SubmitWork.tsx

2. **Add translations** to `translations.ts` for each page

## Testing Checklist

- [ ] Language persists after page refresh
- [ ] All navigation links update when language changes
- [ ] Footer content updates correctly
- [ ] No layout breaking with longer text (German, Spanish)
- [ ] Special characters display correctly (Chinese, Japanese, Korean)
- [ ] Language selector shows current language
- [ ] Dropdown closes when clicking outside
- [ ] Mobile responsive language selector

## Troubleshooting

### Translation not showing
1. Check if translation key exists in `translations.ts`
2. Verify key path is correct (use dot notation)
3. Check console for warnings about missing keys

### Language not persisting
1. Check browser localStorage (key: `viddhana_language`)
2. Verify LanguageProvider wraps entire app
3. Clear cache and reload

### Special characters not displaying
1. Ensure files are UTF-8 encoded
2. Check font supports the character set
3. Verify HTML meta charset is set to UTF-8

## Adding More Languages

To add a new language (e.g., German 'de'):

1. Add language definition in `src/i18n/languages.ts`:
```typescript
de: {
  code: 'de',
  name: 'German',
  nativeName: 'Deutsch',
  flag: '🇩🇪',
}
```

2. Update LanguageCode type in `src/types/translations.ts`:
```typescript
export type LanguageCode = 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'vi' | 'ja' | 'ko' | 'de';
```

3. Add German translations to each section in `translations.ts`:
```typescript
nav: {
  // ...existing languages
  de: {
    home: 'Startseite',
    about: 'Über uns',
    // ...
  }
}
```

## Support

For questions or issues with the translation system:
1. Check this documentation
2. Review existing implementations in Navbar.tsx and Footer.tsx
3. Examine translation structure in translations.ts
4. Use console warnings to debug missing translations
