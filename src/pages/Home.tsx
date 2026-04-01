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
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1.5 bg-primary rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
              Trusted Experts Since 1998
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Reliable Plumbing Services <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
              From emergency repairs to full installations, our licensed professionals are ready to handle any plumbing challenge with speed and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/00000000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 flex items-center justify-center gap-2 text-lg">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="section-padding bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a wide range of professional plumbing solutions tailored to meet your residential and commercial needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose The Plumbers?</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              With over 25 years of experience, we've built our reputation on quality, integrity, and exceptional customer service. We treat every home as if it were our own.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Plumbing Technician" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <CheckCircle2 className="text-primary w-8 h-8" />
                <span className="text-4xl font-bold">25+</span>
              </div>
              <p className="text-slate-500 font-medium">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Getting your plumbing fixed shouldn't be complicated. Here is how we work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="text-6xl font-black text-white/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-3 relative z-10">{step.title}</h4>
              <p className="text-white/70 relative z-10">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what homeowners and business owners think of our work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/testimonials" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Read More Reviews <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Need Urgent Help? <br className="hidden md:block" /> Our Plumbers are Ready.</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
            Available 24/7 for all your plumbing emergencies. No job is too big or too small for The Plumbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a 
              href="https://wa.me/00000000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-xl px-10 py-5"
            >
              <Phone className="w-6 h-6" />
              Call Now: (###) ###-####
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 flex items-center justify-center gap-2 text-xl px-10 py-5">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
