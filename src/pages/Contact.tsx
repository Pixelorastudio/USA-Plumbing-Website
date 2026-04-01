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
        const whatsappNumber = '18402460275';
        const whatsappMessage = `New Lead from Rancho Cucamonga Plumbing Service Website:
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
      {/* Hero Section: Trust-building header */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Contact Hero" 
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
            Contact <span className="text-primary">Rancho Cucamonga Plumbing Service</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get in touch with our experts for a free estimate or emergency service.
          </p>
        </div>
      </section>

      {/* Contact Section: Info + Form */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone Number</h4>
                <a 
                  href="https://wa.me/18402460275" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  +18402460275
                </a>
                <p className="text-sm text-primary font-bold mt-1">24/7 Emergency Line</p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email Address</h4>
                <a href="mailto:info@ranchocucamongaplumbing.com" className="text-slate-600 hover:text-primary transition-colors">info@ranchocucamongaplumbing.com</a>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Office Location</h4>
                <p className="text-slate-600">12729 Jessie Ct, Rancho Cucamonga, CA 91739, United States</p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Working Hours</h4>
                <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-slate-600">Sat - Sun: Emergency Only</p>
              </div>
            </div>
          </div>

          {/* Contact Form: Main conversion element */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out. One of our experts will contact you shortly to discuss your plumbing needs.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          name="name"
                          type="text" 
                          required
                          placeholder="John Doe"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          name="phone"
                          type="tel" 
                          required
                          placeholder="(555) 000-0000"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        name="email"
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Service Needed</label>
                      <select name="service" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option>Emergency Repair</option>
                        <option>Leak Detection</option>
                        <option>Drain Cleaning</option>
                        <option>Water Heater Service</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Your Message</label>
                      <textarea 
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your plumbing issue..."
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      {isLoading ? 'Sending...' : 'Send Message'}
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
          src="https://maps.google.com/maps?q=12729%20Jessie%20Ct,%20Rancho%20Cucamonga,%20CA%2091739&t=&z=13&ie=UTF8&iwloc=&output=embed" 
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
