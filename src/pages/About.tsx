import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, History, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We believe in honest work and transparent pricing for every customer.' },
  { icon: Award, title: 'Quality', desc: 'Our team uses the best materials and techniques to ensure lasting repairs.' },
  { icon: Users, title: 'Customer First', desc: 'Your satisfaction is our top priority. We listen and deliver results.' },
  { icon: History, title: 'Reliability', desc: 'Count on us to be there when we say we will, 24 hours a day.' },
];

const timeline = [
  { year: '1998', title: 'The Beginning', desc: 'USA Plumbing was founded with a single truck and a commitment to quality.' },
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
      {/* Hero Section: Brand identity */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="About Hero" 
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
            About <span className="text-primary">USA Plumbing</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Providing professional, reliable, and trustworthy plumbing solutions for over 25 years.
          </p>
        </div>
      </section>

      {/* Mission & Story: Trust-building narrative */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission & Story</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 1998, USA Plumbing started as a small family-owned business with a simple goal: to provide high-quality plumbing services that people could actually trust. Over the decades, we've grown into one of the region's most respected plumbing companies, but our core values remain the same.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We believe that every customer deserves a plumber who is not only technically skilled but also respectful, clean, and honest. That's why we only hire the best technicians and invest heavily in their ongoing training and certification.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span className="font-bold">Licensed & Bonded</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span className="font-bold">Insured Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span className="font-bold">24/7 Availability</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These are the principles that guide every repair, installation, and interaction we have.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-slate-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A look back at how we've grown and evolved over the years.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0 z-10">
                  {item.year}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px h-full bg-slate-200 mt-4" />
                )}
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
