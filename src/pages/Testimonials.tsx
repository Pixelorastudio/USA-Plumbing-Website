import { motion } from 'motion/react';
import { testimonials } from '../data/mockData';
import TestimonialCard from '../components/TestimonialCard';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/testimonials/1920/1080" 
            alt="Testimonials Hero" 
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
            Customer <span className="text-primary">Reviews</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We take pride in our work and the relationships we build with our customers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">4.9/5</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <p className="text-white/80">Average Rating</p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">5,000+</div>
            <p className="text-white/80 mt-2">Happy Customers</p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">25+</div>
            <p className="text-white/80 mt-2">Years in Business</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
          {/* Add more mock testimonials if needed */}
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.id}-copy`} testimonial={testimonial} index={i + 3} />
          ))}
        </div>
      </section>

      {/* Review CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto text-center bg-white p-12 md:p-20 rounded-3xl shadow-xl border border-slate-100">
          <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">Had a Great Experience?</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Your feedback helps us grow and helps others find reliable plumbing services. We'd love to hear from you!
          </p>
          <button className="btn-primary">
            Leave a Review
          </button>
        </div>
      </section>
    </div>
  );
}
