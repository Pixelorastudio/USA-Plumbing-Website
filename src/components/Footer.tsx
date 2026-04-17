import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Droplets } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60 pt-24 pb-12 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        {/* Brand Section */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-none transition-transform">
              <Droplets className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold uppercase tracking-tight text-white leading-none">
              THE <span className="text-primary">PLUMBERS</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs transition-opacity hover:opacity-100">
            Engineered for reliability. We provide technical plumbing solutions for high-performance residential and commercial systems.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 border border-paper/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Sections */}
        {[
          { title: 'Information', items: ['Home', 'About', 'Gallery', 'FAQ', 'Contact'] },
          { title: 'Expertise', items: ['Emergency Plumbing', 'Leak Repair', 'Drain Cleaning', 'Water Heaters', 'Pipe Repair'] }
        ].map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h4 className="mono-label text-paper/40">{section.title}</h4>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-xs font-mono uppercase tracking-widest hover:text-primary transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact info with Technical Detail style */}
        <div className="space-y-8">
          <h4 className="mono-label text-paper/40">Technical Contact</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs leading-relaxed uppercase font-mono tracking-tight">
                1234 Placeholder Lane <br />
                Placeholder City, ST 00000
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a 
                href="https://wa.me/00000000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-[0.2em] text-paper hover:text-primary transition-colors"
              >
                (###) ###-####
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:info@example.com" className="text-xs font-mono uppercase tracking-[0.2em] text-paper hover:text-primary transition-colors">info@example.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="mono-label text-[9px] text-paper/30 italic">LOG_VERSION_2.4.0 / SYST_STABLE</div>
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-paper/40">© {new Date().getFullYear()} The Plumbers / Engineered Integrity</p>
        <div className="flex gap-8 text-[9px] font-mono uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy_Protocol</a>
          <a href="#" className="hover:text-primary transition-colors">Terms_of_Service</a>
        </div>
      </div>
    </footer>
  );
}
