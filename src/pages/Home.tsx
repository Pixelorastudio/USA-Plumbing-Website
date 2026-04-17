import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Clock, DollarSign, Award, CheckCircle2 } from 'lucide-react';
import { services, testimonials } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const features = [
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Full protection for your home and our team.' },
  { icon: Clock, title: '24/7 Emergency', desc: 'Rapid response when you need it most.' },
  { icon: DollarSign, title: 'Upfront Pricing', desc: 'No hidden fees or surprise charges.' },
  { icon: Award, title: 'Expert Plumbers', desc: 'Highly trained and experienced technicians.' },
];

const steps = [
  { number: '01', title: 'Call Us', desc: 'Contact our friendly team for a quick consultation.' },
  { number: '02', title: 'Inspection', desc: 'We arrive on time to diagnose the issue.' },
  { number: '03', title: 'Fix It', desc: 'Our experts perform the repair efficiently.' },
  { number: '04', title: 'Done', desc: 'Enjoy your fully functional plumbing again.' },
];

/**
 * --- HOME PAGE COMPONENT ---
 * The main landing page designed for high conversion.
 * Sections: Hero, Quick Services, Why Choose Us, Process, Testimonials, CTA Banner.
 */
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center blueprint-grid border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="mono-label mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary" />
              Est. 1998 / Professional Grade
            </div>
            <h1 className="display-title mb-10">
              Clean Water <br />
              <span className="text-primary italic">Solid Pipes</span>
            </h1>
            <p className="text-xl text-ink/60 mb-12 leading-relaxed max-w-lg">
              Precision plumbing for modern homes. We combine technical expertise with rapid 24/7 response to keep your systems running perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://wa.me/00000000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>Emergency Service</span>
              </a>
              <Link to="/contact" className="btn-outline flex items-center justify-center gap-3 group">
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] overflow-hidden relative border border-ink/10">
              <img 
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200&h=1500" 
                alt="Precision Plumbing" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
            {/* Technical Detail Floating Box */}
            <div className="absolute -bottom-10 -left-10 bg-ink p-8 text-paper hidden xl:block min-w-[240px]">
              <div className="mono-label text-paper/50 mb-4">System Status</div>
              <div className="text-4xl font-bold font-display mb-2 text-primary tracking-tighter">100%</div>
              <p className="text-xs uppercase tracking-widest text-paper/60">Flow Efficiency Guaranteed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blueprint-grid -rotate-12 opacity-30 -translate-y-1/2 translate-x-1/2" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 relative z-10">
          <div className="max-w-xl">
            <div className="mono-label mb-4 text-primary">Service Selection</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Expertise in every <br /> <span className="text-primary">Fluid Connection</span></h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] hover:text-primary transition-all">
            See entire catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding border-y border-ink/5 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mono-label mb-6">Company Value Proposition</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 uppercase tracking-tighter">Engineered for <br /><span className="text-primary">Reliability</span></h2>
            <p className="text-xl text-ink/60 mb-12 leading-relaxed">
              With over 25 years of field experience, we treat plumbing as a technical discipline. No guesswork, just precision engineering for your home.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((feature, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-10 border border-ink/5 bg-paper flex items-center justify-center mb-4 group-hover:bg-ink group-hover:text-paper transition-all">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold mb-2 uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-ink/50 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square border border-ink/10 p-6 relative">
              <img 
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1000&h=1000" 
                alt="Plumbing Technician" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 right-0 p-12 bg-primary text-white hidden md:block translate-x-12 -translate-y-12">
                <div className="text-6xl font-display font-bold mb-2 tracking-tighter">25+</div>
                <div className="mono-label text-white/70">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding blueprint-grid border-b border-ink/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="mono-label mb-4 text-primary">Service Protocol</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">How We <br /> <span className="text-primary">Operate</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-7xl font-display font-bold text-ink/5 mb-6 group-hover:text-primary transition-colors duration-500">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h4>
              <p className="text-ink/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-paper">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="mono-label mb-4 text-primary">Field Reports</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">What Our <br /> <span className="text-primary">Clients Experience</span></h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] hover:text-primary transition-all">
            Submit feedback <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding blueprint-grid border-t border-ink/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink p-12 md:p-24 text-center text-paper relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-[120px]" />
          
          <h2 className="display-title mb-12 relative z-10">
            Rapid Response <br /><span className="text-primary italic">24/7 Hotline</span>
          </h2>
          <p className="text-xl text-paper/60 mb-16 max-w-2xl mx-auto relative z-10 leading-relaxed font-light">
            Plumbing disasters don't wait for business hours. The Plumbers technical squad is on standby for immediate deployment.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative z-10 font-mono">
            <a 
              href="https://wa.me/00000000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-12 py-6 text-xl flex items-center gap-4 group"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              <span>(###) ###-####</span>
            </a>
            <div className="text-paper/40 text-[10px] uppercase tracking-widest hidden md:block">or</div>
            <Link to="/contact" className="text-paper hover:text-primary transition-colors uppercase tracking-[0.3em] text-xs">
              Go to digital portal
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
