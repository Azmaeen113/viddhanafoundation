import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import btcdLogo from '@/assets/btcd-logo.jpg';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/dao', label: 'DAO' },
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-secondary/20 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-lg border-2 border-secondary/50 group-hover:border-secondary transition-colors duration-300">
              <img
                src={btcdLogo}
                alt="BTCD Foundation"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-xl font-bold text-secondary hidden sm:block">
              BTCD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg',
                  location.pathname === link.href
                    ? 'text-secondary bg-secondary/10'
                    : 'text-foreground/80 hover:text-secondary hover:bg-secondary/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="default">
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-secondary/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg',
                  location.pathname === link.href
                    ? 'text-secondary bg-secondary/10'
                    : 'text-foreground/80 hover:text-secondary hover:bg-secondary/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="gold" size="lg" className="w-full">
                Launch App
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
