import { Service, Testimonial, FAQ, Project } from '../types';

/**
 * --- SERVICES DATA ---
 * This array contains all the plumbing services offered by USA Plumbing.
 * To add a new service, create a new object with a unique 'id'.
 * Icons are imported from 'lucide-react' in the components.
 */
export const services: Service[] = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    description: '24/7 rapid response for burst pipes, major leaks, and urgent repairs.',
    icon: 'AlertCircle',
    // Image: Professional plumber working on a pipe at night
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Burst pipe repair',
      'Major leak containment',
      'Gas leak detection',
      'Sewer backup resolution'
    ],
    benefits: [
      'Available 24/7',
      'Fast response times',
      'Licensed professionals',
      'Upfront pricing'
    ]
  },
  {
    id: 'leak-repair',
    title: 'Leak Repair',
    description: 'Expert detection and repair of hidden leaks in walls, floors, and ceilings.',
    icon: 'Droplets',
    // Image: Close up of a leaking pipe being fixed
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Electronic leak detection',
      'Slab leak repair',
      'Wall and ceiling leak repair',
      'Faucet and toilet leak fixes'
    ],
    benefits: [
      'Prevent water damage',
      'Reduce utility bills',
      'Non-invasive detection',
      'Long-lasting repairs'
    ]
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Professional clearing of stubborn clogs and preventative maintenance.',
    icon: 'Wrench',
    // Image: Plumber using a snake to clear a drain
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Snaking and hydro-jetting',
      'Kitchen and bathroom drain clearing',
      'Main sewer line cleaning',
      'Video camera inspections'
    ],
    benefits: [
      'Fast and effective',
      'Prevents future clogs',
      'Eco-friendly methods',
      'Improved drainage'
    ]
  },
  {
    id: 'water-heater',
    title: 'Water Heater Services',
    description: 'Installation, repair, and maintenance of all water heater types.',
    icon: 'Flame',
    // Image: Modern water heater unit
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Tankless water heater installation',
      'Traditional tank repair',
      'Annual maintenance flushing',
      'Energy-efficient upgrades'
    ],
    benefits: [
      'Consistent hot water',
      'Lower energy costs',
      'Extended unit lifespan',
      'Expert advice'
    ]
  },
  {
    id: 'residential-plumbing',
    title: 'Residential Plumbing',
    description: 'Comprehensive plumbing solutions for your home and family.',
    icon: 'Home',
    // Image: Plumber installing a new kitchen faucet
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Fixture installation',
      'Pipe replacement',
      'Water filtration systems',
      'Bathroom remodeling'
    ],
    benefits: [
      'Peace of mind',
      'Quality craftsmanship',
      'Clean and tidy work',
      'Customized solutions'
    ]
  },
  {
    id: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    description: 'Specialized plumbing services for businesses and industrial facilities.',
    icon: 'Building2',
    // Image: Large scale industrial plumbing pipes
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Backflow prevention',
      'Grease trap cleaning',
      'Large-scale pipe installation',
      'Regular maintenance contracts'
    ],
    benefits: [
      'Minimize downtime',
      'Code compliance',
      'Scalable services',
      'Priority scheduling'
    ]
  }
];

/**
 * --- TESTIMONIALS DATA ---
 * Customer reviews displayed on the homepage and testimonials page.
 */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    rating: 5,
    text: 'USA Plumbing saved the day when our water heater burst at 2 AM. They arrived within 30 minutes and were incredibly professional.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Dallas, TX',
    rating: 5,
    text: 'The best plumbing service I have ever used. Transparent pricing and they actually cleaned up after themselves. Highly recommend!'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    location: 'San Antonio, TX',
    rating: 4,
    text: 'Great experience with their drain cleaning service. The technician explained everything and gave me tips to prevent future clogs.'
  }
];

/**
 * --- FAQ DATA ---
 * Frequently asked questions for the FAQ page.
 */
export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How quickly can you respond to an emergency?',
    answer: 'We typically arrive within 30-60 minutes for emergency calls, depending on your location and current traffic conditions.'
  },
  {
    id: '2',
    question: 'Are your plumbers licensed and insured?',
    answer: 'Yes, all our technicians are fully licensed, bonded, and insured for your protection and peace of mind.'
  },
  {
    id: '3',
    question: 'Do you offer free estimates?',
    answer: 'We offer free, no-obligation estimates for most major projects and installations. For service calls, a small diagnostic fee may apply.'
  },
  {
    id: '4',
    question: 'What areas do you serve?',
    answer: 'We currently serve the greater metropolitan area and surrounding suburbs. Contact us to see if we cover your specific zip code.'
  }
];

/**
 * --- PROJECTS DATA ---
 * Showcase of past work displayed in the gallery.
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Bathroom Remodel',
    category: 'Residential',
    // Image: Luxury bathroom plumbing
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Complete fixture upgrade and pipe rerouting for a luxury master bathroom.'
  },
  {
    id: '2',
    title: 'Restaurant Kitchen Overhaul',
    category: 'Commercial',
    // Image: Commercial kitchen plumbing
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Installation of high-capacity grease traps and industrial-grade sinks.'
  },
  {
    id: '3',
    title: 'Emergency Main Line Repair',
    category: 'Emergency',
    // Image: Excavation for pipe repair
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Rapid excavation and repair of a collapsed main sewer line.'
  }
];
