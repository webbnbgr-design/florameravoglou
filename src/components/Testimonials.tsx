import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Με γλύτωσε από βάρη που είχε το ακίνητο που αγόρασα. Ο έλεγχος ήταν εξονυχιστικός και η καθοδήγηση πολύτιμη.',
    author: 'Γιάννης Π.',
    role: 'Ιδιώτης / Αγοραστής Ακινήτου',
  },
  {
    quote: 'Εξαιρετική στο Real Estate και τον έλεγχο ακινήτων. Μας εξήγησε τα πάντα με υπομονή και απλά λόγια.',
    author: 'Μαρία Κ.',
    role: 'Επιχειρηματίας',
  },
  {
    quote: 'Αμεσότητα στις κλήσεις και έντιμη οικονομική διαχείριση. Ένας δικηγόρος που μπορείς πραγματικά να εμπιστευτείς.',
    author: 'Νίκος Σ.',
    role: 'Πελάτης',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative Quote Mark */}
      <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4 z-0">
        <Quote size={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
            ΜΑΡΤΥΡΙΕΣ ΠΕΛΑΤΩΝ
          </span>
          <h2 className="heading-md font-serif mb-6">
            Η Εμπιστοσύνη των <span className="italic text-accent">Πελατών</span> μας
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col space-y-8 p-10 bg-white/5 border border-white/10 relative group hover:border-accent transition-all duration-500"
            >
              <Quote className="text-accent" size={32} />
              <p className="text-xl font-serif italic leading-relaxed text-white/80">
                "{testimonial.quote}"
              </p>
              <div className="pt-8 border-t border-white/10">
                <p className="text-lg font-serif text-white">{testimonial.author}</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
