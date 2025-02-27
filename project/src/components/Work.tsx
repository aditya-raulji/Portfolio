import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, Code, Palette, Monitor, Database, ChevronLeft, ChevronRight } from 'lucide-react';

export function Work() {
  const [filter, setFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('work-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Monitor },
    { id: 'frontend', label: 'Frontend', icon: Palette },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'backend', label: 'Backend', icon: Database },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory, secure payments, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      features: [
        'User Authentication',
        'Real-time Inventory',
        'Payment Integration',
        'Admin Dashboard'
      ],
      challenges: [
        'Implementing real-time stock updates',
        'Secure payment processing',
        'Complex state management',
        'Performance optimization'
      ],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      features: [
        'Real-time Updates',
        'Team Collaboration',
        'Task Analytics',
        'File Sharing'
      ],
      challenges: [
        'Real-time synchronization',
        'Data consistency',
        'Scalable architecture',
        'User permissions'
      ],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'AI Image Generator',
      description: 'An AI-powered image generation platform with style transfer and editing capabilities.',
      image: 'https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      category: 'frontend',
      technologies: ['React', 'TensorFlow.js', 'WebGL', 'Canvas API'],
      features: [
        'Style Transfer',
        'Image Editing',
        'Gallery System',
        'Export Options'
      ],
      challenges: [
        'Model optimization',
        'Browser performance',
        'Memory management',
        'UI responsiveness'
      ],
      links: {
        live: '#',
        github: '#'
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProjects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(filteredProjects.length / 3) - 1 : prev - 1
    );
  };

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <div
      className={`group rounded-lg bg-white/5 overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all duration-500 transform hover:scale-[1.02] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        transform: hoveredProject === index ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
      }}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-white font-bold">{project.title}</h4>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs md:text-sm transform hover:scale-105 transition-transform duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-green-500 font-semibold text-sm md:text-base mb-2">Key Features:</h5>
            <ul className="grid grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-400 text-xs md:text-sm">
                  <ArrowRight size={12} className="mr-1 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-green-500 font-semibold text-sm md:text-base mb-2">Challenges Solved:</h5>
            <ul className="grid grid-cols-2 gap-2">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-center text-gray-400 text-xs md:text-sm">
                  <ArrowRight size={12} className="mr-1 text-green-500" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href={'https://shopsy-tcj.netlify.app/'}
            className="flex-1 py-2 rounded bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base transform hover:translate-y-[-2px]"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.links.github}
            className="flex-1 py-2 rounded bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base transform hover:translate-y-[-2px]"
          >
            <Github size={16} />
            Source
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="work-section" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0,rgba(0,0,0,0)_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 transform transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glitch-text bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore my latest projects and creative solutions.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map(f => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                onClick={() => {
                  setFilter(f.id);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base transform hover:scale-105 ${
                  filter === f.id
                    ? 'bg-green-500/20 text-green-500 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <Icon size={16} className="transform group-hover:rotate-12 transition-transform duration-300" />
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}