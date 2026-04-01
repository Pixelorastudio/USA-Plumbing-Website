import { motion } from 'motion/react';
import { services } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';

/**
 * --- SERVICES PAGE COMPONENT ---
 * Displays a full grid of all plumbing services offered.
 */
export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/services/1920/1080" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Plumbing Services</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive plumbing solutions for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See What You're Looking For?</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We handle almost any plumbing issue imaginable. If you have a specific problem that isn't listed here, give us a call and we'll be happy to help.
          </p>
          <a 
            href="https://wa.me/00000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Call Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
