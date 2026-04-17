import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/mockData';
import { Search, X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Emergency'>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 border-b border-ink/10 blueprint-grid relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mono-label mb-6 text-primary">Visual Documentation / Portfolio</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              Case <span className="text-primary italic">Reports</span>
            </h1>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light leading-relaxed">
              Archived records of technical implementation and system transformations. High-fidelity visual evidence of our engineering standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-paper">
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {['All', 'Residential', 'Commercial', 'Emergency'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-10 py-4 border text-[11px] font-mono uppercase tracking-[0.2em] transition-all ${
                filter === cat 
                  ? 'bg-ink text-paper border-ink' 
                  : 'bg-white text-ink/40 border-ink/5 hover:border-ink/20 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer border border-ink/10 p-4 bg-white hover:border-primary transition-all overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-8">
                  <div className="mono-label text-primary mb-2 text-[10px]">CASE_FILE_{project.id}</div>
                  <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-paper border border-ink/10 overflow-hidden max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-ink text-paper flex items-center justify-center hover:bg-primary transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grayscale">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover aspect-video md:aspect-square"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <div className="mono-label text-primary mb-6">Technical Report / {selectedProject.category}</div>
                  <h3 className="text-4xl font-display font-bold uppercase tracking-tight mb-8 leading-none">{selectedProject.title}</h3>
                  <p className="text-xl text-ink/60 leading-relaxed mb-12 font-light">
                    {selectedProject.description}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary"
                  >
                    Return to gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
