import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, History, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We believe in honest work and transparent pricing for every customer.' },
  { icon: Award, title: 'Quality', desc: 'Our team uses the best materials and techniques to ensure lasting repairs.' },
  { icon: Users, title: 'Customer First', desc: 'Your satisfaction is our top priority. We listen and deliver results.' },
  { icon: History, title: 'Reliability', desc: 'Count on us to be there when we say we will, 24 hours a day.' },
];

const timeline = [
  { year: '1998', title: 'The Beginning', desc: 'The Plumbers was founded with a commitment to quality.' },
  { year: '2005', title: 'Expansion', desc: 'We expanded our services to cover the entire metropolitan area.' },
  { year: '2012', title: 'Innovation', desc: 'Introduced advanced leak detection and eco-friendly plumbing solutions.' },
  { year: '2023', title: 'Today', desc: 'A team of 50+ licensed professionals serving thousands of happy customers.' },
];

/**
 * --- ABOUT PAGE COMPONENT ---
 * Provides company history, mission, and core values.
 */
export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 border-b border-ink/10 blueprint-grid relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mono-label mb-6 text-primary">Mission / Identity</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              The <span className="text-primary italic">Plumbing</span> Standard
            </h1>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light leading-relaxed">
              Providing technical mastery and professional integrity for high-performance residential systems since 1998.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mono-label mb-6">Origin Narrative</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Technical <br /><span className="text-primary italic">Excellence</span></h2>
            <p className="text-xl text-ink/60 mb-6 leading-relaxed">
              Founded in 1998, The Plumbers started as a small family-operated workshop committed to a singular goal: treating plumbing as a critical engineering discipline.
            </p>
            <p className="text-lg text-ink/60 mb-10 leading-relaxed font-light">
              We believe every homeowner deserves a technician who is not only skilled in fluid dynamics but also disciplined in professional conduct. This philosophy drives our recruitment and rigorous training protocols.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Licensed & Bonded Registry',
                'Certified System Technicians',
                '24/7 Response Readiness',
                'Full Liability Protection'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-ink/70">{item}</span>
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
            <div className="aspect-[4/3] border border-ink/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-ink text-paper p-8 hidden md:block">
              <div className="mono-label text-paper/40 mb-2">Protocol Certified</div>
              <div className="text-2xl font-display font-bold uppercase tracking-tight">System Reliability</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding blueprint-grid">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="mono-label mb-4 text-primary">Operating Principles</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Foundational <br /> <span className="text-primary italic">Pillars</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-unique group"
            >
              <div className="w-12 h-12 border border-ink/5 bg-paper flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-paper transition-all">
                <value.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{value.title}</h4>
              <p className="text-ink/60 text-sm leading-relaxed font-light">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-t border-ink/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-xl">
            <div className="mono-label mb-4 text-primary">Service Chronology</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Establishing <br /> <span className="text-primary italic">Integrity</span></h2>
          </div>
        </div>
        <div className="max-w-5xl">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 last:mb-0 group"
            >
              <div className="md:col-span-1">
                <div className="text-5xl font-display font-bold text-ink/10 group-hover:text-primary transition-colors duration-500">
                  {item.year}
                </div>
              </div>
              <div className="md:col-span-3 pt-2">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-ink/60 leading-relaxed text-lg font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
