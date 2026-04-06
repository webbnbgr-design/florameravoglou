import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Αρχική', href: '#home' },
  { name: 'Υπηρεσίες', href: '#services' },
  { name: 'Το Γραφείο', href: '#about' },
  { name: 'Επικοινωνία', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary">ΦΛΩΡΑ ΜΕΡΑΒΟΓΛΟΥ</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent font-medium">ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium text-primary/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:2109373638"
            className="flex items-center space-x-2 bg-primary text-white px-5 py-2 text-sm uppercase tracking-widest font-medium hover:bg-accent transition-all"
          >
            <Phone size={16} />
            <span>ΚΛΗΣΗ</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-warm-bg border-b border-primary/10 md:hidden shadow-xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-widest font-medium text-primary hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:2109373638"
                className="flex items-center justify-center space-x-2 bg-primary text-white py-4 text-sm uppercase tracking-widest font-medium"
              >
                <Phone size={18} />
                <span>ΚΑΛΕΣΤΕ ΤΩΡΑ</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
