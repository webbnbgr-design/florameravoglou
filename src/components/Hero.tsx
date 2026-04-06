import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-warm-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-accent/20 -translate-x-1/2 translate-y-1/2 rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
            ΦΛΩΡΑ ΜΕΡΑΒΟΓΛΟΥ • ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ
          </span>
          <h1 className="heading-lg font-serif text-primary mb-6">
            Νομική Υποστήριξη με <span className="italic text-accent">Ανθρώπινο Πρόσωπο</span>
          </h1>
          <p className="text-lg md:text-xl text-primary/70 leading-relaxed mb-10 mx-auto">
            Μεταφράζουμε τη δύσκολη νομική γλώσσα σε απλά, κατανοητά λόγια, προσφέροντας σιγουριά και ασφάλεια σε κάθε σας βήμα, ειδικά στον τομέα των ακινήτων.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary flex items-center justify-center space-x-2 group"
            >
              <span>ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:2109373638"
              className="btn-outline flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>210 9373638</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
