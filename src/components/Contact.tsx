import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    title: 'Τηλέφωνο',
    value: '210 9373638',
    href: 'tel:2109373638',
    icon: <Phone size={24} />,
  },
  {
    title: 'Διεύθυνση',
    value: 'Κανάρη 39, Δάφνη Αττικής',
    href: 'https://maps.google.com/?q=Κανάρη+39,+Δάφνη+Αττικής',
    icon: <MapPin size={24} />,
  },
  {
    title: 'Email',
    value: 'info@meravoglou.gr',
    href: 'mailto:info@meravoglou.gr',
    icon: <Mail size={24} />,
  },
  {
    title: 'Ωράριο',
    value: 'Δευτέρα - Παρασκευή: 09:00 - 21:00',
    href: null,
    icon: <Clock size={24} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-warm-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
            ΕΠΙΚΟΙΝΩΝΙΑ
          </span>
          <h2 className="heading-md font-serif text-primary mb-8">
            Είμαστε εδώ για να σας <span className="italic text-accent">Ακούσουμε</span>
          </h2>
          <p className="text-lg text-primary/70 leading-relaxed max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας για να προγραμματίσουμε ένα ραντεβού ή για οποιαδήποτε νομική απορία έχετε. Η πρώτη επαφή είναι το πρώτο βήμα για τη λύση του προβλήματός σας.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {contactInfo.map((info, index) => (
            <motion.div 
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4 p-8 bg-white shadow-sm border border-primary/5 hover:shadow-md transition-shadow"
            >
              <div className="text-accent bg-primary/5 p-4 rounded-full">{info.icon}</div>
              <h4 className="text-xl font-serif text-primary">{info.title}</h4>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-primary/60 hover:text-accent transition-colors break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-primary/60">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
