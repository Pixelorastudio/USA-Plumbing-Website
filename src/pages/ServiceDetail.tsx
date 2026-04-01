import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { services } from '../data/mockData';
import * as Icons from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = (Icons as any)[service.icon] || Icons.Wrench;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {service.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-medium text-slate-700">{detail}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8">Benefits of Choosing Us</h2>
            <div className="space-y-4 mb-12">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="text-primary w-4 h-4" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/18402460275" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link to="/contact" className="btn-outline flex items-center justify-center gap-2 text-lg">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="mt-8 bg-slate-900 p-8 rounded-3xl text-white">
              <h4 className="text-xl font-bold mb-4">Need Immediate Assistance?</h4>
              <p className="text-slate-400 mb-6">Our emergency plumbing team is available 24/7 to handle any urgent issues.</p>
              <a 
                href="https://wa.me/18402460275" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +18402460275
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
