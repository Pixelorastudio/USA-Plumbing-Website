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
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/faq/1920/1080" 
            alt="FAQ Hero" 
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
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about our services, pricing, and process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 sticky top-32">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                If you can't find the answer you're looking for, please don't hesitate to contact our team.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/14809447023" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary transition-all group"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-bold">Call Us Directly</span>
                </a>
                <a href="/contact" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary transition-all group">
                  <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-bold">Send a Message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2">
            {faqs.map((faq) => (
              <FAQAccordion
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
            {/* Add more mock FAQs if needed */}
            {faqs.map((faq) => (
              <FAQAccordion
                key={`${faq.id}-copy`}
                faq={faq}
                isOpen={openId === `${faq.id}-copy`}
                onToggle={() => setOpenId(openId === `${faq.id}-copy` ? null : `${faq.id}-copy`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
