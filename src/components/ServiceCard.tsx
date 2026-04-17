import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
  key?: string | number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = (Icons as any)[service.icon] || Icons.Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-unique group flex flex-col h-full"
    >
      <div className="mono-label mb-2">Service ID/0{index + 1}</div>
      <div className="w-16 h-16 bg-paper border border-ink/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
        <Icon className="w-8 h-8 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
      <p className="text-ink/60 mb-8 flex-grow leading-relaxed">{service.description}</p>
      <Link 
        to={`/services/${service.id}`} 
        className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-ink hover:text-primary transition-all"
      >
        <span>Explore Details</span>
        <Icons.ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
