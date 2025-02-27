import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'Services', href: 'services' },
    { label: 'Resume', href: 'resume' },
    { label: 'Work', href: 'work-section' },
    { label: 'Contact', href: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Increased height of the navbar (h-20 = 80px)
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'instant' // Instant navigation
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Enhanced animation keyframes with futuristic logo animation
  const navAnimations = `
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInScale {
      from { 
        opacity: 0;
        transform: scale(0.8);
      }
      to { 
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes mobileMenuExpand {
      from {
        opacity: 0;
        height: 0;
      }
      to {
        opacity: 1;
        height: auto;
      }
    }
    
    @keyframes glow {
      0% { box-shadow: 0 0 5px rgba(34,197,94,0.3); }
      50% { box-shadow: 0 0 15px rgba(34,197,94,0.6); }
      100% { box-shadow: 0 0 5px rgba(34,197,94,0.3); }
    }
    
    @keyframes particleAssemble {
      0% {
        opacity: 0;
        transform: scale(0) translateX(-20px) translateY(-20px);
        filter: blur(5px);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.2) translateX(0) translateY(0);
        filter: blur(2px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateX(0) translateY(0);
        filter: blur(0);
      }
    }
    
    .nav-item-hover:hover {
      transform: translateY(-2px);
      color: #22c55e; /* green-500 */
      transition: all 0.3s ease;
    }
    
    .hire-me-glow {
      animation: glow 2s infinite ease-in-out;
    }
    
    .logo-particle {
      animation: particleAssemble 1.5s ease-out forwards;
    }
  `;

  // Logo URL
  const logoUrl =  'https://assets.grok.com/users/83540ee0-9ebb-43aa-97d4-0e7f2cbe9894/lHYJcSSO59beMMdD-generated_image.jpg';

  return (
    <nav 
      className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-green-500/20 z-50"
      style={{ animation: 'slideDown 0.7s ease-out' }}
    >
      <style>{navAnimations}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased from h-16 to h-20 */}
          <div 
            className="flex-shrink-0"
          >
            <img 
              src={logoUrl} 
              alt="AP Logo" 
              className="  h-16 w-auto object-contain logo-particle" // Increased from h-12 to h-16
              style={{ background: '' }} // Ensure transparent background
              onError={(e) => {
                console.error('Error loading logo image.');
                e.currentTarget.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAACUCAMAAAAanWP/AAAAbFBMVEUGBwn///8AAAAKCw08PD3l5eVLTEwAAANBQUEQEBDW19j8/Pz4+Pi+vr7s7Ozz8/Pe3t5gYGCwsLCKiorHx8fQ0NEmJiZ9fX0uLi5zc3M2NziWlpaPkJAaGhpHR0idnp6np6hWVlZra2wfICHk6fYJAAAFHklEQVR4nO2a27KiOhBATW+RDQEE5CaCgP7/P54AuQAGnTNTmzBTvZ4slXIldDqdxsMBQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDkHwfAtMGfAJfyjb+tYzu5jwCc43V923nhi13Ss6HjG+BCg9XphzJ0F6SJ3zb5oyt2MQCoU0KbVf0jWSFIbt878IfrmRD3uGKyrk8ItSrjNwBqv1fJf0OfkTwN+0NEKPNwM73He31K0ndJawPAH/TJ43f02aU+mMyikHGR9IM+pdJYvX4XdpsArdDQpxGlvzb9gcHlC6UnV6E2ClTwhMD5frTheTKC1aT786jJJ+dIp6H0Lf7xMIQu9uT9cL9M+cN3qKIi1k3/q/7wLkAuxx2srPqfB6pJEFidRkOv3w8gluFfGdKH0p0uQl0Qr+mzlCVXjfa2bcAkAoYcoqkcVvVtx5eLvjAy/TaEZIYmClb1WaEqPnHNlG7QLbL5+X/pX8Un4d2Mvoh8votSzQ76Rv8hPzmZ0IdILL7Y5/rhcge1f2X2jejbINYevUf8lbeYfrvOfiH2jQQPRAH/ed8pUpFE6nl2f1xXE+eXTPzp2lnnB7FlvUBzgIqvYe8618/bck0/E6Mnfr29PpzEzycZqP1rrgL38Cay01Jfxo6Rmg0aMfl9tpe3wpstQxtUabYoGgo5+WcDFT/AmWcbq98zoRQl8LzlA2Wg02dVs1gtbOUaCH1WL9BRvx1+XKYhMs+dLD3O9G17KJgrOfcs3kxMvvh9OurKQ+Ni+g9jZUlp4I+dtbq4R+10s/YMpE2ZaqQtJHw4846b7fT3hRIvadtbVd3aOJ2etF6Hu4n9U4QuFUtV1ACLuhlOUe2TN6z3F39QPxf1gu/wWh3k1uVOheBu1U61dlKnhF4N2GciUqg66KlEfpnqH0lYsvS/0mgwkTRZoAibRDXX4Ci2Lndy/OhLNrcDp3J19uHGcw/zLDk7prKti4/qMdcn1hWguPjBQj6IN046zj1j51KVJK1pZ1NtXe5Cn5wbljOfp0er0g5NL6fDtvZ2fbs+2R3gk0+9G8yQNeR9ElLjO+ldfKk4RVF3rPuXW5/Q4ZiE8eXKYyRor9fH4xExuu5eFgBCX3XcuD5LMZf+TvFN14T7YAOXlM7SIPXO3jkIrDBN4sYSCUV23IQ+u8I3c6SdAZBF1aLBoHht3ajDok8DbRtxY6AG59RYmkRO1V2Rpkq/LFvP/MMs+A77NAJ17ruB9zoGTvOi/80uSszr5yw0njA0irtLnFh6fYtXDlN9VkGY1oehuZNG/f7VZ5GsyxuXLB6Y9FQa/Y3zvIahs8bq35Y/Fe9vQlZqFjMdF+9c3zj95A8T7eXimeaQyo9xMJt/ygu3felDJJ+wecm0n88G0MxvQTg8NNmVvi3PVCTOw2BWL7Lj9226oY0dt13pq84asynyeVeEDSAKJwNIHNiXfl+Ucbv4y9bkcTjIqo1P/670ZWdtPGU5L/8EAGjU9Pcdt13p34RLOh6oNI8jVNU8dNx2pA/g8XVLb6su8Exk7vT3pV+Jzlq48v+R4VsnVUewQ8lu9EVbk7E++Yfhz2Hie/Ge9GUnxHvbkAdH7l9BsRt91Vn71FRl4xTz3+xHX8XEp76ePPOS8FjuQ9+u28AaCGLnwzEbYv5Vy8oLcZWBLv4Eu76fRro3aWcEspP4bumIl5/G/MOoFsfnaZz0fuRle/rjL4IgCIIgCIIgCIIgCIIgCIIgCIIgCIL8y3z91fwHtjk/DZB2KysAAAAASUVORK5CYII="'; // Fallback to base64 if URL fails
              }}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 nav-item-hover text-sm" // Reduced text size
                  style={{ animation: `slideInRight 0.5s ease-out ${0.2 * (index + 1)}s both` }}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-3 py-1.5 rounded bg-green-500/20 text-green-500 border border-green-500/50 hover:bg-green-500/30 transition-all duration-300 hire-me-glow text-sm" // Reduced size and text
                style={{ animation: `slideInRight 0.5s ease-out ${1.2}s both` }}
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div 
            className="md:hidden"
            style={{ animation: 'fadeInScale 0.7s ease-out' }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden overflow-hidden"
            style={{ animation: 'mobileMenuExpand 0.4s ease-out' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 nav-item-hover text-sm" // Reduced text size
                  style={{ animation: `fadeInScale 0.4s ease-out ${0.1 * (index + 1)}s both` }}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-3 py-1.5 rounded bg-green-500/20 text-green-500 border border-green-500/50 hover:bg-green-500/30 transition-all duration-300 hire-me-glow text-sm" // Reduced size and text
                style={{ animation: `fadeInScale 0.4s ease-out ${0.6}s both` }}
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}