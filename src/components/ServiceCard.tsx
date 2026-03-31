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
      className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
      <Link 
        to={`/services/${service.id}`} 
        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
      >
        Learn More <Icons.ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
