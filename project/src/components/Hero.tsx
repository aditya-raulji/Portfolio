import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Youtube, Download, ArrowRight } from 'lucide-react';

export function Hero() {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    technologies: 0,
    commits: 0
  });

  const finalStats = [
    { label: 'Years Experience', value: 1, symbol: '+' },
    { label: 'Projects Completed', value: 25, symbol: '+' },
    { label: 'Technologies', value: 20, symbol: '+' },
    { label: 'Code Commits', value: 2500, symbol: '+' },
  ];

  useEffect(() => {
    finalStats.forEach((stat, index) => {
      const key = Object.keys(counts)[index] as keyof typeof counts;
      const duration = 10000;
      const steps = 100;
      const increment = stat.value / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep < steps) {
          setCounts(prev => ({
            ...prev,
            [key]: Math.min(Math.round(increment * currentStep), stat.value)
          }));
          currentStep++;
        } else {
          clearInterval(interval);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    });
  }, []);

  // Animation keyframes with modified typewriter effect
  const heroAnimations = `
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
      
      
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes bounceIn {
      0% { opacity: 0; transform: scale(0.8); }
      60% { opacity: 1; transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .typewriter {
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid rgba(34,197,94,0.7);
      animation: typing 3s steps(20) 1s 1 normal both;
    }
    
    .typewriter-secondary {
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid rgba(34,197,94,0.7);
      animation: typing 2s steps(10) 4s 1 normal both;
    }
    
    /* Remove cursor after animation */
    .typewriter.finished,
    .typewriter-secondary.finished {
      border-right: none;
    }
  `;

  // State to track when animations are finished
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    // Set timeout to remove cursor after all typing animations complete
    const timer = setTimeout(() => {
      setIsTypingFinished(true);
    }, 6000); // 6s = 1s delay + 3s first text + 2s second text

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-16 md:pt-20 min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      <style>{heroAnimations}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className="space-y-6 md:space-y-8"
            style={{ animation: 'slideInLeft 1s ease-out' }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span 
                className={`bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 typewriter ${isTypingFinished ? 'finished' : ''}`}
                style={{ display: 'inline-block' }}
              >
                Full Stack Developer
              </span>
              <span 
                className={`block text-xl md:text-3xl mt-2 text-green-500 typewriter-secondary ${isTypingFinished ? 'finished' : ''}`}
                style={{ display: 'inline-block' }}
              >
                & UI Designer
              </span>
            </h1>
            
            <p 
              className="text-sm md:text-base text-gray-400"
              style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}
            >
              Crafting digital experiences with code and creativity. Specialized in building modern web applications with cutting-edge technologies.
            </p>

            <div 
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}
            >
              <button className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded bg-gradient-to-r from-green-500/20 to-purple-500/20 text-green-500 border border-green-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </button>
              <button className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                View Work
                <ArrowRight size={18} />
              </button>
            </div>

            <div 
              className="flex gap-4"
              style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
            >
              {[
                { Icon: Github, href: 'https://github.com/aditya-raulji' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-raulji-714492322/' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-green-500/10 to-purple-500/10 flex items-center justify-center hover:scale-110 hover:from-green-500/20 hover:to-purple-500/20 transition-all duration-300"
                  style={{ animation: `bounceIn 0.5s ease-out ${0.8 + index * 0.1}s both` }}
                >
                  <Icon size={18} className="text-green-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div 
              className="w-48 h-48 md:w-72 md:h-72 mx-auto relative transform hover:scale-105 transition-transform duration-300"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
              <div className="absolute inset-0 rounded-full" style={{
                background: 'conic-gradient(from 0deg, rgba(34,197,94,0.2), rgba(139,92,246,0.2), rgba(236,72,153,0.2), rgba(34,197,94,0.2))',
                animation: 'spin 10s linear infinite'
              }} />
              <img
                src="https://media-hosting.imagekit.io//63b816123e4d4166/1432.jpg?Expires=1834738125&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jHIdm7z1mQhJ4qH6a043wwfngWUU7Gmd9sndo1wkbz5g6lo2y6MB4ucgs5WZHFBWZ533ijtIUl6NclOBKj4Ow2FEUxqQBm5DthW~pQElzuAWXtOPhbddBmb4H4uSYFcjc9mQ8prvsUnBR31bIMlSdzLA5tWrC5zlmZyw2t0PhUa7LsgEoFMFUnifzu7a5K0iWBORRlCYXpvvXiGQIOVFmwZ7mLOQVUvzdoCNUoCmqoVtGkdBm5wvZheh-tJZj6oaurnzM8ryEfCfp1G84DsFmVLPzNzXz8uJKg2hP1B1QAZ0ujSHiVmbTvlohXbj3A6XOIHLBT1k6smvhE1TmiRWFA__"
                alt="Developer Portrait"
                className="w-full h-full object-cover rounded-full border-4 border-green-500/50"
              />
            </div>
          </div>
        </div>

        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20"
          style={{ animation: 'fadeInUp 1s ease-out 1s both' }}
        >
          {finalStats.map((stat, index) => {
            const key = Object.keys(counts)[index] as keyof typeof counts;
            return (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg bg-gradient-to-r from-green-500/5 to-purple-500/5 hover:from-green-500/10 hover:to-purple-500/10 transition-all duration-300 transform hover:scale-105"
                style={{ animation: `bounceIn 0.5s ease-out ${1.2 + index * 0.1}s both` }}
              >
                <div className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-500">
                  {counts[key]}{stat.symbol}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}