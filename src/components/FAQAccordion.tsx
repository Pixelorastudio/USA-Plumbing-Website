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
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 bg-white transition-all hover:border-primary/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 transition-colors hover:text-primary"
      >
        <span>{faq.question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
