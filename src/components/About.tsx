import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Αμεσότητα στις κλήσεις',
    description: 'Απαντάμε άμεσα σε κάθε σας ερώτημα, προσφέροντας την απαραίτητη καθοδήγηση.',
    icon: <Clock size={24} />,
  },
  {
    title: 'Υπομονή στην επεξήγηση',
    description: 'Μεταφράζουμε τη δύσκολη νομική γλώσσα σε απλά λόγια για να κατανοείτε κάθε βήμα.',
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: 'Έντιμη οικονομική διαχείριση',
    description: 'Πλήρης διαφάνεια στο κόστος των υπηρεσιών μας, χωρίς κρυφές χρεώσεις.',
    icon: <ShieldCheck size={24} />,
  },
  {
    title: 'Εμπειρία παρ\' Αρείω Πάγω',
    description: 'Υψηλού επιπέδου νομική εκπροσώπηση στα ανώτατα δικαστήρια της χώρας.',
    icon: <Award size={24} />,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-warm-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square bg-primary/5 p-12 relative">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-accent/30" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-accent/30" />
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
              alt="Legal Office Interior"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Experience Badge */}
          <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 hidden md:block">
            <p className="text-4xl font-serif text-accent mb-2">20+</p>
            <p className="text-xs uppercase tracking-widest font-medium text-white/60">
              ΧΡΟΝΙΑ ΕΜΠΕΙΡΙΑΣ ΣΤΗ ΜΑΧΙΜΗ ΔΙΚΗΓΟΡΙΑ
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
            ΤΟ ΓΡΑΦΕΙΟ ΜΑΣ
          </span>
          <h2 className="heading-md font-serif text-primary mb-8">
            Νομική <span className="italic text-accent">Σαφήνεια</span> & Ειλικρίνεια
          </h2>
          <p className="text-lg text-primary/70 leading-relaxed mb-10">
            Στο γραφείο της Φλώρας Μεράβογλου, πιστεύουμε ότι η δικαιοσύνη πρέπει να είναι προσβάσιμη και κατανοητή από όλους. Η ικανότητά μας να 'μεταφράζουμε' τη δύσκολη νομική γλώσσα σε απλά λόγια για τον πελάτη είναι αυτό που μας κάνει να ξεχωρίζουμε.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col space-y-3">
                <div className="text-accent">{benefit.icon}</div>
                <h4 className="text-xl font-serif text-primary">{benefit.title}</h4>
                <p className="text-sm text-primary/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
