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
      <section className="py-24 border-b border-ink/10 blueprint-grid relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mono-label mb-6 text-primary">Technical Catalog / Services</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              Full Spectrum <span className="text-primary italic">Expertise</span>
            </h1>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive plumbing protocols for residential and commercial infrastructure. Selected services for optimal system performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-paper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="section-padding blueprint-grid border-t border-ink/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mono-label mb-6">Custom Inquiries</div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Non-Standard <br /><span className="text-primary italic">Requirements?</span></h2>
          <p className="text-xl text-ink/60 mb-12 leading-relaxed font-light">
            We handle complex plumbing challenges beyond standard catalog items. If your system requires specific engineering, initialize a direct consultation.
          </p>
          <a 
            href="https://wa.me/00000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12"
          >
            Initialize Call
          </a>
        </div>
      </section>
    </div>
  );
}
