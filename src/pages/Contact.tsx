import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';

/**
 * --- CONTACT PAGE COMPONENT ---
 * Handles user inquiries through a form and displays company contact information.
 */
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles the contact form submission by calling the backend API.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // Calling the Express backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }

      const result = await response.json();
      if (result.success) {
        // Construct WhatsApp message URL
        const whatsappNumber = '00000000000';
        const whatsappMessage = `New Lead from The Plumbers Website:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service: ${data.service}
Message: ${data.message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 border-b border-ink/10 blueprint-grid relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mono-label mb-6">Service Portal / Inquiry</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              Establish <span className="text-primary italic">Contact</span>
            </h1>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light leading-relaxed">
              For technical support, emergency repairs, or professional consultations. Our team is available for immediate dispatch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="mono-label mb-8 text-primary">Technical Info</div>
            
            {[
              { icon: Phone, title: 'Hotline', value: '(###) ###-####', sub: '24/7 Response Units', link: 'https://wa.me/00000000000' },
              { icon: Mail, title: 'Electronic Mail', value: 'info@example.com', sub: 'General Inquiries', link: 'mailto:info@example.com' },
              { icon: MapPin, title: 'Hub Location', value: '1234 Placeholder Lane', sub: 'Placeholder City, ST 00000', link: '#' },
              { icon: Clock, title: 'Operation Hours', value: '08:00 - 18:00', sub: 'Mon-Fri / Sat Emer. Only', link: '#' },
            ].map((item, i) => (
              <div key={i} className="card-unique flex items-start gap-6">
                <div className="w-10 h-10 border border-ink/5 bg-paper flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-ink/40 mb-1">{item.title}</h4>
                  {item.link !== '#' ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold uppercase tracking-tight hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold uppercase tracking-tight">{item.value}</p>
                  )}
                  <p className="text-[10px] font-mono uppercase tracking-widest mt-1 text-primary italic">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 border border-ink/5 shadow-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-16 h-16 bg-ink text-paper flex items-center justify-center mx-auto mb-10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Transmission Received</h3>
                  <p className="text-ink/60 mb-12 max-w-sm mx-auto font-light leading-relaxed">
                    Our technical coordinator has received your data packet and will initialize contact shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline px-10"
                  >
                    Resubmit Form
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mono-label mb-10">Transmission Form</div>
                  {error && (
                    <div className="mb-8 p-6 bg-red-50 text-red-600 font-mono text-[11px] uppercase tracking-wider border-l-4 border-red-600">
                      Error: {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40">Full_Name</label>
                        <input 
                          name="name"
                          type="text" 
                          required
                          placeholder="REQUIRED_FIELD"
                          className="w-full px-0 py-4 bg-transparent border-b border-ink/10 focus:outline-none focus:border-primary transition-colors placeholder:text-ink/10"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40">Contact_Phone</label>
                        <input 
                          name="phone"
                          type="tel" 
                          required
                          placeholder="REQUIRED_FIELD"
                          className="w-full px-0 py-4 bg-transparent border-b border-ink/10 focus:outline-none focus:border-primary transition-colors placeholder:text-ink/10"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40">Electronic_Address</label>
                      <input 
                        name="email"
                        type="email" 
                        required
                        placeholder="REQUIRED_FIELD"
                        className="w-full px-0 py-4 bg-transparent border-b border-ink/10 focus:outline-none focus:border-primary transition-colors placeholder:text-ink/10"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40">Technical_Category</label>
                      <select name="service" className="w-full px-0 py-4 bg-transparent border-b border-ink/10 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                        <option>Emergency_Repair</option>
                        <option>Leak_Detection</option>
                        <option>Drain_Cleaning</option>
                        <option>Water_Heater_Service</option>
                        <option>Other_Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40">Inquiry_Data</label>
                      <textarea 
                        name="message"
                        rows={4}
                        required
                        placeholder="DESCRIBE_TECHNICAL_ISSUE"
                        className="w-full px-0 py-4 bg-transparent border-b border-ink/10 focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-ink/10"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full btn-primary py-6 flex items-center justify-center gap-4 group"
                    >
                      {isLoading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                      <span className="text-sm font-mono uppercase tracking-[0.4em]">{isLoading ? 'Processing...' : 'Initialize Transfer'}</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed: Visual location reference */}
      <section className="h-[400px] bg-slate-200 relative overflow-hidden">
        <iframe 
          src="https://maps.google.com/maps?q=1234%20Placeholder%20Lane,%20Placeholder%20City,%20ST%2000000&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale contrast-125 opacity-70"
        ></iframe>
      </section>
    </div>
  );
}
