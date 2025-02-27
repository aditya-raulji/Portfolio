import React, { useState } from 'react';
import { Briefcase, GraduationCap, Code, User, ArrowRight } from 'lucide-react';

export function Resume() {
  const [activeSection, setActiveSection] = useState('experience');

  const menuItems = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'about', label: 'About Me', icon: User },
  ];

  const experiences = [
    {
      title: 'Junior Full Stack Developer',
     
 
      description: 'Leading development of enterprise-grade web applications using modern tech stacks.',
      details: 'Responsible for end-to-end development, from architecture design to deployment, focusing on scalability and user experience.',
      achievements: [
        'Architected microservices infrastructure serving 100K+ users',
        'Reduced loading times by 60% through optimization techniques',
        'Mentored 5 junior developers in React and Node.js',
        'Implemented CI/CD pipelines using GitHub Actions'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd',
    
      description: 'Developed and maintained responsive web applications for diverse clients.',
      details: 'Collaborated with design teams to create visually appealing and functional interfaces.',
      achievements: [
        'Built and deployed 20+ client websites using React',
        'Created reusable component library for design systems',
        'Optimized frontend performance by 40%',
        'Led UI/UX initiatives for 3 major projects'
      ]
    },
    {
      title: 'Web Developer Intern',
  
      description: 'Supported development teams in building startup web applications.',
      details: 'Gained hands-on experience with modern frameworks and agile development practices.',
      achievements: [
        'Contributed to 5 major projects using JavaScript',
        'Adopted agile methodologies in team workflows',
        'Improved coding standards through peer reviews',
        'Collaborated with senior developers on API integrations'
      ]
    }
  ];

  const education = [

    {
      degree: 'Bachelor of Computer Science',
      institution: 'Rai University',
      period: '2024 - 2028',
      
      location: 'Ahmedabad, Dhodka',
      description: 'Core foundation in computer science principles and programming.',
      details: 'Comprehensive coursework in algorithms, data structures, and software development.',
      achievements: [
        '9 CGPA',
        "Dean's List all semesters",
        'President of Computer Science Club (2015-2016)',
        'Completed internship at major tech firm',
        'Received Junior project award for web platform'
      ]
    }
  ];

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js', 'Svelte'],
    backend: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Django', 'GraphQL'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack', 'Vite'],
   
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'experience':
        return (
          <div className="space-y-6"> {/* Reduced from space-y-8 */}
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-white/5 border border-green-500/20 hover:bg-green-500/5 transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.2 * index}s both` }}
              >
                <h3 className="text-lg font-bold mb-1 text-green-500">{exp.title}</h3> {/* Reduced from text-xl, mb-2 */}
                <div className="text-gray-400 text-sm mb-2"></div> {/* Reduced to text-sm, mb-4 to mb-2 */}
                <p className="text-gray-300 text-sm mb-2">{exp.description}</p> {/* Reduced to text-sm, mb-4 to mb-2 */}
                <p className="text-gray-500 text-xs mb-3 italic">{exp.details}</p> {/* Added details, text-xs */}
                <ul className="space-y-1"> {/* Reduced from space-y-2 */}
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-xs"> {/* Reduced to text-xs */}
                      <ArrowRight size={14} className="mr-2 text-green-500" /> {/* Reduced from size-16 */}
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-6"> {/* Reduced from space-y-8 */}
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-white/5 border border-green-500/20 hover:bg-green-500/5 transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.2 * index}s both` }}
              >
                <h3 className="text-lg font-bold mb-1 text-green-500">{edu.degree}</h3> {/* Reduced from text-xl, mb-2 */}
                <div className="text-gray-400 text-sm mb-2">{edu.institution} • {edu.period} • {edu.location}</div> {/* Reduced to text-sm, mb-4 to mb-2 */}
                <p className="text-gray-300 text-sm mb-2">{edu.description}</p> {/* Reduced to text-sm, mb-4 to mb-2 */}
                <p className="text-gray-500 text-xs mb-3 italic">{edu.details}</p> {/* Added details, text-xs */}
                <ul className="space-y-1"> {/* Reduced from space-y-2 */}
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-xs"> {/* Reduced to text-xs */}
                      <ArrowRight size={14} className="mr-2 text-green-500" /> {/* Reduced from size-16 */}
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="grid md:grid-cols-2 gap-6"> {/* Reduced from gap-8 */}
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={category} 
                className="p-4 rounded-lg bg-white/5 border border-green-500/20"
                style={{ animation: `scaleIn 0.6s ease-out ${0.2 * index}s both` }}
              >
                <h3 className="text-lg font-bold mb-3 capitalize text-green-500">{category}</h3> {/* Reduced from text-xl, mb-4 */}
                <div className="flex flex-wrap gap-2"> {/* Reduced from gap-3 */}
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs" 
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'about':
        return (
          <div 
            className="p-4 rounded-lg bg-white/5 border border-green-500/20"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <h3 className="text-lg font-bold mb-3 text-green-500">About Me</h3> {/* Reduced from text-xl, mb-4 */}
            <p className="text-gray-300 text-sm mb-4"> {/* Reduced to text-sm, mb-6 to mb-4 */}
              I'm a passionate Full Stack Developer in creating modern web applications. 
              My journey began with a deep curiosity about technology, leading me to pursue advanced education and work with 
              innovative companies worldwide.
            </p>
            <p className="text-gray-300 text-sm mb-4"> {/* Reduced to text-sm, mb-6 to mb-4 */}
              I excel in building scalable solutions using modern frameworks, with a keen eye for design and usability. 
              My goal is to craft digital experiences that solve real problems while pushing the boundaries of what's possible.
            </p>
            <div className="space-y-3"> {/* Reduced from space-y-4 */}
              <h4 className="text-base font-bold text-green-500">What I Bring:</h4> {/* Reduced from text-lg */}
              <ul className="space-y-1"> {/* Reduced from space-y-2 */}
                {[
                  'Expertise in scalable web architecture design',
                  'Leadership in cross-functional dev teams',
                  'Strong communication with clients & stakeholders',
                  'Commitment to latest tech trends & best practices'
                ].map((point, index) => (
                  <li key={index} className="flex items-center text-gray-400 text-xs"> {/* Reduced to text-xs */}
                    <ArrowRight size={14} className="mr-2 text-green-500" /> {/* Reduced from size-16 */}
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
  };

  // Animation keyframes
  const resumeAnimations = `
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
      id="resume" 
      className="py-12 relative overflow-hidden" // Reduced from py-20
      style={{ animation: 'fadeInUp 0.8s ease-out' }}
    >
      <style>{resumeAnimations}</style>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0,rgba(0,0,0,0)_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"> {/* Reduced from max-w-7xl */}
        <div 
          className="text-center mb-10" // Reduced from mb-16
          style={{ animation: 'slideInLeft 0.8s ease-out' }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 glitch-text"> {/* Reduced from text-3xl md:text-5xl */}
            Resume
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto"> {/* Reduced to text-sm */}
            A concise overview of my professional journey, skills, and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-[200px,1fr] gap-6"> {/* Reduced from 250px to 200px, gap-8 to gap-6 */}
          <div className="space-y-1"> {/* Reduced from space-y-2 */}
            {menuItems.map(({ id, label, icon: Icon }, index) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`w-full text-left px-3 py-2 rounded flex items-center gap-2 transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-green-500/20 text-green-500'
                    : 'hover:bg-white/5 text-gray-400'
                }`}
                style={{ animation: `slideInLeft 0.6s ease-out ${0.2 * index}s both` }}
              >
                <Icon size={18} /> {/* Reduced from size-20 */}
                <span className="text-sm">{label}</span> {/* Added text-sm */}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]"> {/* Reduced from min-h-[600px] */}
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}