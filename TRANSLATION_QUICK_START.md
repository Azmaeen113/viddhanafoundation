# Quick Start: Adding Translations to Your Pages

## Pattern to Follow

Every page component should follow this pattern:

### 1. Import the hook at the top
```tsx
import { useTranslation } from '@/i18n/LanguageContext';
```

### 2. Use the hook in your component
```tsx
export default function YourPage() {
  const { t } = useTranslation();
  
  return (
    // Your JSX with t() function calls
  );
}
```

### 3. Replace hardcoded text with translation keys
```tsx
// Before:
<h1>Welcome to Viddhana</h1>

// After:
<h1>{t('yourPage.welcome')}</h1>
```

## Examples for Each Page

### Technology Page
```tsx
import { useTranslation } from '@/i18n/LanguageContext';

export default function Technology() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <h1>{t('technology.title')}</h1>
      <p>{t('technology.description')}</p>
    </Layout>
  );
}
```

Then add to `src/i18n/translations.ts`:
```typescript
technology: {
  en: {
    title: 'Our Technology',
    description: 'Building the future...',
  },
  zh: {
    title: '我们的技术',
    description: '构建未来...',
  },
  // Add all 8 languages...
}
```

### About Page
```tsx
import { useTranslation } from '@/i18n/LanguageContext';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <h1>{t('about.title')}</h1>
      <p>{t('about.mission')}</p>
      <p>{t('about.vision')}</p>
    </Layout>
  );
}
```

### Contact Page with Form
```tsx
import { useTranslation } from '@/i18n/LanguageContext';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <h1>{t('contact.title')}</h1>
      <form>
        <label>{t('contact.form.name')}</label>
        <input placeholder={t('contact.form.namePlaceholder')} />
        
        <label>{t('contact.form.email')}</label>
        <input placeholder={t('contact.form.emailPlaceholder')} />
        
        <button>{t('contact.form.submit')}</button>
      </form>
    </Layout>
  );
}
```

## Translation Keys Already Available

You can use these translation keys right now:

### Navigation (use anywhere)
- `t('nav.home')`
- `t('nav.about')`
- `t('nav.ecosystem')`
- `t('nav.technology')`
- `t('nav.tokenomics')`
- `t('nav.roadmap')`
- `t('nav.dao')`
- `t('nav.whitepaper')`
- `t('nav.contact')`
- `t('nav.submitWork')`

### Home Page
- `t('home.hero.title')`
- `t('home.hero.subtitle')`
- `t('home.hero.cta')`
- `t('home.hero.learnMore')`
- `t('home.features.title')`
- `t('home.features.subtitle')`
- `t('home.features.feature1Title')`
- `t('home.features.feature1Desc')`
- And many more...

### Footer
- `t('footer.tagline')`
- `t('footer.quickLinks')`
- `t('footer.community')`
- `t('footer.legal')`
- `t('footer.privacyPolicy')`
- `t('footer.termsOfService')`
- `t('footer.copyright')`

### Common UI
- `t('common.loading')`
- `t('common.error')`
- `t('common.submit')`
- `t('common.cancel')`
- `t('common.save')`
- `t('common.edit')`
- `t('common.delete')`
- `t('common.close')`
- `t('common.back')`
- `t('common.next')`

## Step-by-Step: Updating a Page

Let's say you want to update the **Ecosystem** page:

### Step 1: Add translations to `src/i18n/translations.ts`

Add after the existing sections:

```typescript
export const translations = {
  // ...existing translations (nav, home, footer, common)
  
  // Add ecosystem section
  ecosystem: {
    en: {
      title: 'VIDDHANA Ecosystem',
      subtitle: 'A comprehensive suite of financial tools',
      component1: 'DeFi Hub',
      component1Desc: 'Decentralized exchange and lending',
      // Add more keys as needed
    },
    zh: {
      title: 'VIDDHANA生态系统',
      subtitle: '全面的金融工具套件',
      component1: 'DeFi中心',
      component1Desc: '去中心化交易和借贷',
    },
    hi: {
      title: 'VIDDHANA इकोसिस्टम',
      subtitle: 'वित्तीय उपकरणों का एक व्यापक सूट',
      component1: 'DeFi हब',
      component1Desc: 'विकेंद्रीकृत एक्सचेंज और उधार',
    },
    es: {
      title: 'Ecosistema VIDDHANA',
      subtitle: 'Un conjunto completo de herramientas financieras',
      component1: 'Hub DeFi',
      component1Desc: 'Intercambio y préstamos descentralizados',
    },
    fr: {
      title: 'Écosystème VIDDHANA',
      subtitle: 'Une suite complète d\'outils financiers',
      component1: 'Hub DeFi',
      component1Desc: 'Échange et prêt décentralisés',
    },
    vi: {
      title: 'Hệ Sinh Thái VIDDHANA',
      subtitle: 'Bộ công cụ tài chính toàn diện',
      component1: 'Trung tâm DeFi',
      component1Desc: 'Sàn giao dịch và cho vay phi tập trung',
    },
    ja: {
      title: 'VIDDHANAエコシステム',
      subtitle: '包括的な金融ツールスイート',
      component1: 'DeFiハブ',
      component1Desc: '分散型取引所と融資',
    },
    ko: {
      title: 'VIDDHANA 생태계',
      subtitle: '포괄적인 금융 도구 모음',
      component1: 'DeFi 허브',
      component1Desc: '탈중앙화 거래소 및 대출',
    },
  },
};
```

### Step 2: Update the Ecosystem component

```tsx
// src/pages/Ecosystem.tsx
import { useTranslation } from '@/i18n/LanguageContext';
import { Layout } from '@/components/Layout';

export default function Ecosystem() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <section>
        <h1>{t('ecosystem.title')}</h1>
        <p>{t('ecosystem.subtitle')}</p>
        
        <div>
          <h2>{t('ecosystem.component1')}</h2>
          <p>{t('ecosystem.component1Desc')}</p>
        </div>
      </section>
    </Layout>
  );
}
```

### Step 3: Test
1. Run your dev server: `npm run dev`
2. Click the language selector
3. Switch between languages
4. Verify all text updates correctly

## Tips for Large Pages

For pages with lots of content (like Index.tsx):

1. **Group by sections**: Create subsections in translations
```typescript
homepage: {
  en: {
    hero: {
      title: '...',
      subtitle: '...',
    },
    features: {
      title: '...',
      feature1: '...',
    },
    // etc
  }
}
```

2. **Update incrementally**: Don't try to translate everything at once
   - Start with hero section
   - Then features
   - Then stats
   - etc.

3. **Use constants for structured data**: For arrays of features/items:
```tsx
const features = [
  {
    icon: Wallet,
    titleKey: 'ecosystem.feature1Title',
    descKey: 'ecosystem.feature1Desc',
  },
  {
    icon: Brain,
    titleKey: 'ecosystem.feature2Title',
    descKey: 'ecosystem.feature2Desc',
  },
];

// In JSX:
{features.map((feature) => (
  <div key={feature.titleKey}>
    <h3>{t(feature.titleKey)}</h3>
    <p>{t(feature.descKey)}</p>
  </div>
))}
```

## Common Mistakes to Avoid

❌ **DON'T**: Call `t()` outside component
```tsx
const title = t('page.title'); // Error!

export default function Page() {
  return <h1>{title}</h1>;
}
```

✅ **DO**: Call `t()` inside component
```tsx
export default function Page() {
  const { t } = useTranslation();
  const title = t('page.title'); // Correct!
  
  return <h1>{title}</h1>;
}
```

❌ **DON'T**: Forget to add all languages
```typescript
mySection: {
  en: { title: 'Title' },
  // Missing other languages!
}
```

✅ **DO**: Add all 8 languages
```typescript
mySection: {
  en: { title: 'Title' },
  zh: { title: '标题' },
  hi: { title: 'शीर्षक' },
  es: { title: 'Título' },
  fr: { title: 'Titre' },
  vi: { title: 'Tiêu đề' },
  ja: { title: 'タイトル' },
  ko: { title: '제목' },
}
```

## Need Help with Translations?

1. **Use Google Translate** for draft translations (but get them reviewed by native speakers)
2. **Keep it simple**: Short, clear sentences translate better
3. **Consistent terminology**: Use the same terms across all pages
4. **Test with real users**: Have native speakers test the translations

## Current Status

✅ **Completed**:
- Translation system infrastructure
- Language selector component  
- Navbar translations
- Footer translations
- Homepage hero section (partial)

🚧 **To Do**:
- Complete Homepage (Index.tsx)
- About page
- Technology page
- Ecosystem page
- Tokenomics page
- Roadmap page
- DAO page
- Whitepaper page
- Contact page
- SubmitWork page

Follow this guide to add translations to the remaining pages!
