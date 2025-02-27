import React, { useEffect } from 'react';
import { NavBar } from './NavBar';
import { MouseCursor } from './MouseCursor';

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="animated-bg" />
      <NavBar />
      <main>{children}</main>
      <MouseCursor />
    </div>
  );
}