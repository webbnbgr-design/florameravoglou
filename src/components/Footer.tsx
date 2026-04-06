import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#home" className="flex flex-col mb-8">
              <span className="text-2xl font-serif font-bold tracking-tight text-white">ΦΛΩΡΑ ΜΕΡΑΒΟΓΛΟΥ</span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ</span>
            </a>
            <p className="text-white/50 max-w-md leading-relaxed mb-8">
              Νομική υποστήριξη με έμφαση στην ειλικρίνεια, τη σαφήνεια και την αποτελεσματικότητα. Εξειδίκευση στο Real Estate και τον έλεγχο ακινήτων.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8 text-accent">ΣΥΝΔΕΣΜΟΙ</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/50 hover:text-white transition-colors">Αρχική</a></li>
              <li><a href="#services" className="text-white/50 hover:text-white transition-colors">Υπηρεσίες</a></li>
              <li><a href="#about" className="text-white/50 hover:text-white transition-colors">Το Γραφείο</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-white transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8 text-accent">ΕΠΙΚΟΙΝΩΝΙΑ</h4>
            <ul className="space-y-4">
              <li className="text-white/50">Κανάρη 39, Δάφνη Αττικής</li>
              <li className="text-white/50">210 9373638</li>
              <li className="text-white/50">info@meravoglou.gr</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} ΦΛΩΡΑ ΜΕΡΑΒΟΓΛΟΥ. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-3 text-xs uppercase tracking-widest text-white/30 hover:text-accent transition-colors"
          >
            <span>ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΚΟΡΥΦΗ</span>
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
