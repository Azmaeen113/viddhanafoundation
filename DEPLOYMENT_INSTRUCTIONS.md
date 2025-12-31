# VIDDHANA Website - Deployment Instructions

## 📦 Package Contents

This deliverable package contains the complete production-ready VIDDHANA website with full multi-language support.

### What's Included:
- **dist/** - Production-built website files (optimized and minified)
- **VIDDHANA WHITEPAPERE.pdf** - Official whitepaper
- **_redirects** - Netlify/Vercel routing configuration
- **manifest.json** - PWA manifest file
- **robots.txt** - SEO crawler instructions
- **README.md** - Project documentation

## 🌐 Multi-Language Support

The website supports 8 languages:
- 🇬🇧 English (en) - Default
- 🇨🇳 Chinese Simplified (zh)
- 🇮🇳 Hindi (hi)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇻🇳 Vietnamese (vi)
- 🇯🇵 Japanese (ja)
- 🇰🇷 Korean (ko)

Language preference is automatically saved in localStorage and persists across sessions.

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the entire **dist/** folder
3. Or connect your Git repository for automatic deployments
4. Custom domain setup available in site settings

### Option 2: Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Run: `vercel --prod`
4. Follow the prompts to deploy

### Option 3: GitHub Pages
1. Push the **dist/** folder contents to `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Select `gh-pages` branch as source

### Option 4: Traditional Web Hosting
1. Upload all files from **dist/** folder via FTP/SFTP
2. Ensure the whitepaper PDF is accessible at root
3. Configure server to handle SPA routing (redirect all routes to index.html)

## 📋 Pre-Deployment Checklist

- [ ] Whitepaper PDF is in the dist folder root
- [ ] Environment variables are set (if any)
- [ ] Domain/subdomain DNS is configured
- [ ] SSL certificate is active (handled automatically by Netlify/Vercel)
- [ ] Test all 8 languages work correctly
- [ ] Verify all pages load properly
- [ ] Check mobile responsiveness
- [ ] Test whitepaper download functionality

## ⚙️ Server Configuration

### For SPA Routing (Required)

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🔧 Build Information

- **Build Tool**: Vite 5.4.19
- **Framework**: React 18.3.1 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **i18n**: react-i18next
- **Build Size**: ~850 KB (gzipped: ~283 KB)

## 📱 Features

### Pages Included:
1. **Home** - Hero, features, stats, CTA
2. **Technology** - Technical architecture, AI integration
3. **Ecosystem** - Platform components, token utility
4. **Tokenomics** - Token distribution, supply metrics
5. **Roadmap** - Development phases, milestones
6. **DAO** - Governance structure, voting mechanism
7. **Whitepaper** - Documentation, PDF download
8. **About** - Mission, vision, team, development status
9. **Contact** - Contact form, social links

### Key Features:
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Multi-language support with instant switching
- ✅ Dark theme with gold accents
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Fast loading (optimized assets)
- ✅ Accessible (WCAG compliant)

## 🐛 Troubleshooting

### Issue: 404 on Page Refresh
**Solution**: Configure server for SPA routing (see Server Configuration above)

### Issue: Language Not Persisting
**Solution**: Ensure localStorage is enabled in the browser

### Issue: PDF Not Downloading
**Solution**: Verify PDF file is in the root of the dist folder

### Issue: Broken Images/Assets
**Solution**: Check that all assets are using relative paths

## 📞 Support

For technical support or questions:
- Review README.md for development setup
- Check the source code repository
- Contact the development team

## 📄 License

Copyright © 2025 VIDDHANA Foundation. All rights reserved.

---

**Last Updated**: December 31, 2025  
**Version**: 1.0.0  
**Build Date**: 2025-12-31
