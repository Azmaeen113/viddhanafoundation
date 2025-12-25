import { Link } from 'react-router-dom';
import { 
  Twitter, 
  MessageCircle, 
  Youtube, 
  Mail,
  ArrowUp
} from 'lucide-react';

const viddhanLogo = '/Viddhana Logo.jpg';

const quickLinks = [
  { href: '/technology', label: 'Technology' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/roadmap', label: 'Roadmap' },
];

const resourceLinks = [
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/docs', label: 'Documentation' },
  { href: '/api', label: 'API Docs' },
  { href: '/blog', label: 'Blog' },
];

const communityLinks = [
  { href: '#', label: 'Discord' },
  { href: '#', label: 'Twitter' },
  { href: '#', label: 'Telegram' },
  { href: '#', label: 'Forum' },
];

const legalLinks = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/risk-disclosure', label: 'Risk Disclosure' },
  { href: '/compliance', label: 'Compliance' },
];

const socialLinks = [
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: MessageCircle, label: 'Telegram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-green-dark/30 border-t border-secondary/20">
      {/* Newsletter Section */}
      <div className="border-b border-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-secondary mb-2">
              Stay Updated
            </h3>
            <p className="text-muted-foreground">
              Get the latest news and updates from VIDDHANA Foundation
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 overflow-hidden rounded-lg border-2 border-secondary/50">
                <img
                  src={viddhanLogo}
                  alt="VIDDHANA"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-xl font-bold text-secondary">
                VIDDHANA
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Personal Wealth Operating System. Democratizing Finance for Billions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Product</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Community</h4>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Legal</h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-serif text-lg text-secondary mb-4 mt-8">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-secondary" />
                <span>hello@viddhana.io</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-secondary" />
                <span>press@viddhana.io</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-secondary" />
                <span>support@viddhana.io</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} VIDDHANA. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p className="mb-1">Personal Wealth Operating System</p>
              <p>Democratizing Finance for Billions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-dark text-background shadow-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
