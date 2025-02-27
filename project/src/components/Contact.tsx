import React from "react";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";


export function Contact() {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 8347394206", href: "tel:+15551234567" },
    { icon: Mail, label: "Email", value: "rauljiaditya54@gmai.com", href: "https://mail.google.com/mail/u/2/#inbox" },
    { icon: MapPin, label: "Location", value: "Gujrat, Ahmedabad", href: "#" },
  
    { icon: Globe, label: "Website", value: "www.CareSlotter.com", href: "https://CareSlotter.com" },
  ];

  return (
    <section id="contact" className="py-16 flex justify-center items-start min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0,rgba(0,0,0,0)_50%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 glitch-text">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Let's discuss your project and see how we can work together to create something amazing.
          </p>
        </div>

        <div className="flex justify-between items-start gap-10">
          {/* Left Side: Message Form */}
          <div className="w-full max-w-[400px]">
            <h3 className="text-xl font-bold mb-4 text-green-500">Send Me a Message</h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 rounded bg-white/5 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 text-white placeholder-gray-500 text-sm"
                    placeholder="Name "
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 rounded bg-white/5 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 text-white placeholder-gray-500 text-sm"
                    placeholder="Name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-gray-400 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 rounded bg-white/5 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 text-white placeholder-gray-500 text-sm"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 rounded bg-white/5 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 text-white placeholder-gray-500 text-sm"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded bg-green-500/20 text-green-500 border border-green-500/50 hover:bg-green-500/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information (Smaller text & icons, aligned to the top) */}
          <div className="w-[250px] flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2 text-green-500">Contact Info</h3>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex items-center gap-2 p-2 rounded bg-white/5 hover:bg-green-500/5 border border-green-500/20 transition-all duration-300"
                >
                  <Icon size={16} className="text-green-500" />
                  <div>
                    <div className="text-[11px] font-medium text-gray-400">{label}</div>
                    <div className="text-xs text-white">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-3 rounded bg-white/5 border border-green-500/20 text-xs">
              <h4 className="text-base font-bold mb-1 text-green-500">Available for Freelance</h4>
              <p className="text-gray-400">
                I'm available for freelance work. If you have a project that needs to be built, feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
