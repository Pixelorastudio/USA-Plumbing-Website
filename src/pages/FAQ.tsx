import { useState } from 'react';
import { motion } from 'motion/react';
import { faqs } from '../data/mockData';
import FAQAccordion from '../components/FAQAccordion';
import { HelpCircle, Phone, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 border-b border-ink/10 blueprint-grid relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mono-label mb-6 text-primary">Information Knowledge Base</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              Critical <span className="text-primary italic">Intelligence</span>
            </h1>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light leading-relaxed">
              Essential technical data and system protocols for property owners. Resolve common inquiries through our official knowledge base.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-10">
              <div>
                <div className="mono-label mb-6 text-primary">Support Units</div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Direct <br />Consultation</h3>
                <p className="text-ink/60 mb-8 leading-relaxed font-light">
                  If your technical inquiry is not addressed in this database, initialize direct contact with our support units.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/00000000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 border border-ink/5 bg-white hover:border-primary transition-all group"
                >
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest">Initial Hotline</span>
                </a>
                <a href="/contact" className="flex items-center gap-6 p-6 border border-ink/5 bg-white hover:border-primary transition-all group">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest">Digital Inquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2 border-t border-ink/10">
            {faqs.map((faq) => (
              <FAQAccordion
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
