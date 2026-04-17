import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ } from '../types';

interface FAQAccordionProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  key?: string | number;
}

export default function FAQAccordion({ faq, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className={`border-b transition-all duration-300 ${isOpen ? 'border-primary bg-primary/5' : 'border-ink/10 bg-white hover:bg-paper'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-8 text-left transition-colors group"
      >
        <div className="flex items-center gap-6">
          <div className={`text-xs font-mono uppercase tracking-widest ${isOpen ? 'text-primary' : 'text-ink/30 group-hover:text-ink'}`}>Q/REF_0{faq.id}</div>
          <span className={`text-xl font-bold uppercase tracking-tight ${isOpen ? 'text-primary' : 'text-ink'}`}>{faq.question}</span>
        </div>
        <div className={`w-8 h-8 flex items-center justify-center border transition-all ${isOpen ? 'border-primary bg-primary text-white rotate-180' : 'border-ink/10 text-ink/40'}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 pb-12 text-ink/70 leading-relaxed text-lg font-light ml-24 max-w-3xl">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
