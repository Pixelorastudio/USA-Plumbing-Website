import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  key?: string | number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-unique flex flex-col h-full"
    >
      <div className="mono-label mb-6">Client Review/0{index + 1}</div>
      <div className="flex gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14}
            className={`${i < testimonial.rating ? 'text-accent fill-accent' : 'text-paper-dark'}`} 
          />
        ))}
      </div>
      <p className="text-lg font-medium text-ink/80 mb-10 leading-relaxed italic">"{testimonial.text}"</p>
      <div className="mt-auto flex items-center gap-4 pt-6 border-t border-ink/5">
        <div className="w-10 h-10 bg-ink text-paper flex items-center justify-center font-mono text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-ink uppercase tracking-tight leading-none mb-1">{testimonial.name}</h4>
          <p className="text-[10px] font-mono uppercase tracking-widest text-ink/40">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
