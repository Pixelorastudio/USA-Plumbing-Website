import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-paper/80 backdrop-blur-xl border-b border-ink/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-ink p-2 rounded-none group-hover:bg-primary transition-colors">
            <Droplets className="text-paper w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold uppercase tracking-tight text-ink">
            THE <span className="text-primary">PLUMBERS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-mono uppercase tracking-[0.2em] transition-all hover:text-primary relative group ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-ink/60'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <a 
            href="https://wa.me/00000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-none text-[11px] font-mono uppercase tracking-widest hover:bg-primary transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency Call</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-ink"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-paper border-b border-ink/5 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-display font-bold uppercase tracking-tight ${
                    location.pathname === link.path ? 'text-primary' : 'text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/00000000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center justify-center gap-3 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency Call</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
