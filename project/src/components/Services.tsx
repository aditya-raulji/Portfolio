import React from 'react';
import { Code2, Palette, Lightbulb, Search, ArrowUpRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: '01',
      title: 'Web Development',
      icon: Code2,
      description: 'Building modern, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js.',
      details: 'Specializing in scalable, high-performance web solutions with clean code architecture and seamless user experiences.',
      features: [
        'Custom Web Applications with React/Next.js',
        'RESTful & GraphQL API Integration',
        'Performance Optimization & Lazy Loading',
        'Responsive & Mobile-First Design'
      ]
    },
    {
      id: '02',
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Creating intuitive and beautiful user interfaces with a focus on user experience and modern design principles.',
      details: 'Crafting pixel-perfect designs that enhance usability and engagement, tailored to your brand’s unique needs.',
      features: [
        'User Research & Persona Development',
        'Wireframing & Interactive Prototypes',
        'High-Fidelity Mockups',
        'Reusable Design Systems & Components'
      ]
    },
    {
      id: '03',
      title: 'Brand Identity',
      icon: Lightbulb,
      description: 'Developing comprehensive brand identities including logos, style guides, and visual language.',
      details: 'Establishing a cohesive brand presence that resonates with your audience and stands out in the market.',
      features: [
        'Custom Logo Design & Variations',
        'Brand Guidelines & Style Guides',
        'Consistent Visual Identity Across Platforms',
        'Marketing Collateral Design'
      ]
    },
    {
      id: '04',
      title: 'SEO Optimization',
      icon: Search,
      description: 'Optimizing websites for search engines to improve visibility and organic traffic.',
      details: 'Implementing strategic SEO techniques to boost rankings, drive traffic, and increase conversions.',
      features: [
        'Technical SEO Audits & Fixes',
        'Keyword Research & Content Strategy',
        'Page Speed & Performance Metrics',
        'Google Analytics & Search Console Setup'
      ]
    }
  ];

  // Animation keyframes
  const serviceAnimations = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

  return (
    <section 
      id="services" 
      className="py-12 relative overflow-hidden" // Reduced padding from py-20 to py-12
      style={{ animation: 'fadeInUp 0.8s ease-out' }}
    >
      <style>{serviceAnimations}</style>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0,rgba(0,0,0,0)_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"> {/* Reduced from max-w-7xl to max-w-6xl */}
        <div 
          className="text-center mb-10" // Reduced from mb-16 to mb-10
          style={{ animation: 'slideInLeft 0.8s ease-out' }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 glitch-text"> {/* Reduced from text-3xl md:text-5xl */}
            My Services
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto"> {/* Reduced from default to text-sm */}
            Delivering high-quality solutions across various domains of software development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6"> {/* Reduced from gap-8 to gap-6 */}
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="p-6 rounded-lg bg-white/5 hover:bg-green-500/5 border border-green-500/20 transition-all duration-300 group" // Reduced padding from p-8 to p-6
                style={{ animation: `scaleIn 0.6s ease-out ${0.2 * index}s both` }}
              >
                <div className="flex items-start justify-between mb-4"> {/* Reduced from mb-6 to mb-4 */}
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"> {/* Reduced from w-12 h-12 */}
                    <IconComponent size={20} /> {/* Reduced from size-24 to size-20 */}
                  </div>
                  <span className="text-xl font-bold text-green-500 opacity-20">{service.id}</span> {/* Reduced from text-2xl */}
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-green-500 transition-colors"> {/* Reduced from text-xl, mb-4 to mb-3 */}
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3"> {/* Reduced from default to text-sm, mb-6 to mb-3 */}
                  {service.description}
                </p>
                
                <p className="text-gray-500 text-xs mb-4 italic"> {/* Added details with smaller text, mb-4 */}
                  {service.details}
                </p>

                <ul className="space-y-2 mb-4"> {/* Reduced from space-y-3 mb-6 to space-y-2 mb-4 */}
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300"> {/* Reduced from text-sm */}
                      <ArrowUpRight size={14} className="mr-1 text-green-500" /> {/* Reduced from size-16 */}
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 rounded bg-white/5 hover:bg-green-500/20 text-white hover:text-green-500 transition-all duration-300 flex items-center justify-center gap-1 text-sm"> {/* Reduced from py-3, added text-sm */}
                  Learn More
                  <ArrowUpRight size={14} /> {/* Reduced from size-16 */}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}