import { Link } from 'react-router-dom';
import { 
  Twitter, 
  MessageCircle, 
  Youtube, 
  Github,
  Mail,
  ArrowUp
} from 'lucide-react';
import btcdLogo from '@/assets/btcd-logo.jpg';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/roadmap', label: 'Roadmap' },
];

const resourceLinks = [
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/dao', label: 'DAO Governance' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
];

const socialLinks = [
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: MessageCircle, label: 'Telegram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
  { href: '#', icon: Github, label: 'GitHub' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-burgundy-dark/30 border-t border-secondary/20">
      {/* Newsletter Section */}
      <div className="border-b border-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-secondary mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest news and updates from BTCD Foundation
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-card/50 border border-secondary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 overflow-hidden rounded-lg border-2 border-secondary/50">
                <img
                  src={btcdLogo}
                  alt="BTCD Foundation"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-xl font-bold text-secondary">
                BTCD Foundation
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the future of decentralized finance for 8 billion people. 
              A complete financial operating system powered by blockchain and AI.
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

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Quick Links</h4>
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

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-secondary" />
                <span>contact@btcdfoundation.io</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                Join our community of over 100,000+ members worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} BTCD Foundation. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-secondary transition-colors">
                Disclaimer
              </Link>
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
