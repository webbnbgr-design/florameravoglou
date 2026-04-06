import { motion } from 'motion/react';
import { Home, Users, Briefcase, Scale, MessageSquare } from 'lucide-react';

const services = [
  {
    title: 'Real Estate & Ακίνητα',
    description: 'Εξειδικευμένος έλεγχος ακινήτων, μεταβιβάσεις, και διασφάλιση της επένδυσής σας από νομικά βάρη.',
    icon: <Home size={32} />,
    featured: true,
  },
  {
    title: 'Αστικό Δίκαιο',
    description: 'Διαφορές ιδιωτικού δικαίου, συμβάσεις, και προστασία των δικαιωμάτων σας σε κάθε επίπεδο.',
    icon: <Scale size={32} />,
  },
  {
    title: 'Οικογενειακό Δίκαιο',
    description: 'Διαζύγια, επιμέλεια τέκνων και περιουσιακές διαφορές με ευαισθησία και διακριτικότητα.',
    icon: <Users size={32} />,
  },
  {
    title: 'Εμπορικό Δίκαιο',
    description: 'Νομική κάλυψη επιχειρήσεων, σύσταση εταιρειών και εμπορικές συμβάσεις.',
    icon: <Briefcase size={32} />,
  },
  {
    title: 'Νομικές Συμβουλές',
    description: 'Εξατομικευμένη καθοδήγηση και επεξήγηση νομικών ζητημάτων σε απλή, κατανοητή γλώσσα.',
    icon: <MessageSquare size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
              ΥΠΗΡΕΣΙΕΣ & ΕΞΕΙΔΙΚΕΥΣΕΙΣ
            </span>
            <h2 className="heading-md font-serif mb-6">
              Ολοκληρωμένη Νομική Κάλυψη με <span className="italic text-accent">Συνέπεια</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm mb-2">
            Προσφέρουμε εξειδικευμένες υπηρεσίες με έμφαση στην ποιότητα, την ταχύτητα και την ειλικρινή επικοινωνία.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-10 border border-white/10 group hover:border-accent transition-all duration-500 ${service.featured ? 'bg-white/5' : ''}`}
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-12 h-[1px] bg-accent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
