import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Code, Database, Globe, ChevronDown, ExternalLink, User, Briefcase, GraduationCap, Terminal, Layers, ArrowUpRight, Download, Phone, MapPin, Calendar, Award, Star, Eye, Menu, X } from 'lucide-react';

// ===========================================
// DATA CONFIGURATION - EDIT THESE VALUES
// ===========================================

// Personal Information
export const PERSONAL_INFO = {
  name: 'Abdullah Al Noman',
  title: 'Senior Full-Stack Developer & Software Architect',
  description: 'Crafting scalable digital solutions with 4+ years of experience in modern web technologies, cloud architecture, and team leadership.',
  email: 'nomanstine@gmail.com',
  phone: '+880 1234 567890',
  phoneDisplay: '+880 1234 567890',
  location: 'Jashore, Khulna',
  experience: '4+ Years Experience',
  availability: 'Available for Hire',
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  resumeFile: '/resume-abdullah-noman.pdf',
  resumeFilename: 'Abdullah-Al-Noman-Resume.pdf'
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/nomanstine',
  linkedin: 'https://linkedin.com/in/abdullah-al-noman',
  email: 'nomanstine@gmail.com'
};

// About Me Stats
export const ABOUT_STATS = {
  projectsCompleted: '50+',
  happyClients: '15+'
};

// About Me Text
export const ABOUT_TEXT = [
  "I'm a passionate senior full-stack developer with over 4 years of experience building scalable web applications and leading development teams to deliver exceptional digital experiences.",
  "My expertise spans across modern JavaScript frameworks, cloud architecture, and DevOps practices. I believe in writing clean, maintainable code and creating user-centered solutions that make a real impact.",
  "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers in the tech community."
];

// Skills Data
export const SKILLS_DATA = [
  { 
    name: 'Frontend Development', 
    experience: '4+ years', 
    proficiency: 'Expert', 
    technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Angular'] 
  },
  { 
    name: 'Backend Engineering', 
    experience: '3+ years', 
    proficiency: 'Advanced', 
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'] 
  },
  { 
    name: 'Cloud Architecture', 
    experience: '2+ years', 
    proficiency: 'Advanced', 
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Azure', 'GCP'] 
  },
  { 
    name: 'Mobile Development', 
    experience: '2+ years', 
    proficiency: 'Intermediate', 
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'] 
  },
  { 
    name: 'DevOps & CI/CD', 
    experience: '3+ years', 
    proficiency: 'Advanced', 
    technologies: ['Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'] 
  },
  { 
    name: 'Machine Learning', 
    experience: '1+ years', 
    proficiency: 'Intermediate', 
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API'] 
  }
];

// Projects Data
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'FinanceFlow',
    category: 'Financial Technology',
    type: 'web',
    description: 'Enterprise-grade financial analytics platform with real-time data processing and predictive modeling capabilities serving 50K+ users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    year: '2024',
    status: 'Production',
    github: 'https://github.com',
    live: 'https://financeflow.com',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'CodeCollab',
    category: 'Developer Tools',
    type: 'desktop',
    description: 'Collaborative IDE with live code sharing, integrated version control, and AI-powered code suggestions used by 10K+ developers.',
    tech: ['Electron', 'WebRTC', 'Monaco Editor', 'GraphQL', 'Socket.io'],
    year: '2023',
    status: 'Open Source',
    github: 'https://github.com',
    live: 'https://codecollab.dev',
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'DataViz Pro',
    category: 'Data Analytics',
    type: 'web',
    description: 'Advanced data visualization suite for enterprise clients with custom chart builders and interactive dashboards.',
    tech: ['D3.js', 'Python', 'FastAPI', 'WebGL', 'Three.js'],
    year: '2023',
    status: 'Enterprise',
    github: 'https://github.com',
    live: 'https://dataviz.pro',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'MedConnect',
    category: 'Healthcare',
    type: 'mobile',
    description: 'Telemedicine platform connecting patients with healthcare providers, featuring secure video calls and health record management.',
    tech: ['React Native', 'Firebase', 'Node.js', 'WebRTC', 'MongoDB'],
    year: '2024',
    status: 'Production',
    github: 'https://github.com',
    live: 'https://medconnect.app',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop'
    ]
  }
];

// Experience Data
export const EXPERIENCE_DATA = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    description: 'Lead development of microservices architecture serving 100K+ users. Reduced system latency by 40% through optimization and implemented cloud-native solutions.',
    achievements: [
      'Led team of 8 developers across 3 time zones',
      'Architected scalable microservices handling 1M+ requests/day',
      'Mentored 5 junior developers with 100% retention rate',
      'Reduced deployment time from 2 hours to 15 minutes'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Software Engineer',
    company: 'InnovateLab',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Developed customer-facing web applications using modern frameworks. Implemented CI/CD pipelines and improved code quality standards.',
    achievements: [
      'Built 5 responsive applications with 99.9% uptime',
      'Implemented comprehensive testing strategies (95% coverage)',
      'Collaborated with design team to deliver pixel-perfect UIs',
      'Reduced bug reports by 60% through quality improvements'
    ],
    technologies: ['Vue.js', 'Python', 'GCP', 'MongoDB', 'Jenkins']
  },
  {
    title: 'Junior Developer',
    company: 'StartupHub',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Contributed to full-stack development of e-commerce platforms and internal tools. Gained experience in agile methodologies and modern development practices.',
    achievements: [
      'Developed 15+ features for e-commerce platform',
      'Optimized database queries reducing load time by 30%',
      'Participated in code reviews improving team code quality',
      'Successfully completed 3 major product launches'
    ],
    technologies: ['JavaScript', 'React', 'Express', 'MySQL', 'Git']
  }
];

// Testimonials Data
export const TESTIMONIALS_DATA = [
  {
    name: 'Sarah Johnson',
    position: 'Product Manager',
    company: 'TechCorp Solutions',
    content: 'David is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and leadership skills make him invaluable to any team.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=60&h=60&fit=crop&crop=face'
  },
  {
    name: 'Michael Rodriguez',
    position: 'CTO',
    company: 'InnovateLab',
    content: 'Working with David was a pleasure. He has a deep understanding of modern web technologies and always finds elegant solutions to complex problems.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
  },
  {
    name: 'Emily Chen',
    position: 'Senior Designer',
    company: 'TechCorp Solutions',
    content: 'David bridges the gap between design and development perfectly. He understands user experience and translates designs into beautiful, functional applications.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
  }
];

// Contact Messages
export const CONTACT_MESSAGES = {
  heading: "Let's Connect",
  subheading: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's create something amazing together.",
  description: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's create something amazing together.",
  getInTouch: "Get In Touch",
  quickMessage: "Send a Quick Message"
};

// Footer Information
export const FOOTER_INFO = {
  copyright: '© 2024 Abdullah Al Noman. Crafted with precision and care.',
  techStack: 'Made with React & Tailwind CSS',
  tech: 'Made with React & Tailwind CSS',
  deployment: 'Deployed on Vercel',
  hosting: 'Deployed on Vercel'
};

// ===========================================
// COMPONENT STARTS HERE
// ===========================================

const Portfolio = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-slide images for all projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        PROJECTS_DATA.forEach(project => {
          const currentIndex = newIndex[project.id] || 0;
          newIndex[project.id] = (currentIndex + 1) % project.images.length;
        });
        return newIndex;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToResume = () => {
    // Download resume file from public folder
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = PERSONAL_INFO.resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.type === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-50/95 backdrop-blur-xl border-b border-slate-200 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Animated Profile Image in Header */}
              <div className={`transition-all duration-700 ease-in-out transform ${
                isScrolled 
                  ? 'opacity-100 scale-100 translate-x-0 rotate-0' 
                  : 'opacity-0 scale-0 -translate-x-8 -rotate-180'
              }`}>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400/30 shadow-lg">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-xl sm:text-2xl font-bold text-slate-900">
                {PERSONAL_INFO.name}
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['Work', 'Skills', 'About', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <button 
                onClick={handleNavigateToResume}
                className="px-3 lg:px-4 py-2 bg-emerald-400 text-slate-900 rounded-full hover:bg-emerald-300 transition-all duration-300 font-medium text-sm flex items-center space-x-2 transform hover:scale-105"
              >
                <Download size={14} />
                <span className="hidden lg:inline">Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-1 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-b-2xl shadow-2xl shadow-slate-900/20 z-50">
              <div className="flex flex-col space-y-1 p-4">
                {['Work', 'Skills', 'About', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300 font-medium py-3 px-4 rounded-xl"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-2 border-t border-slate-200 mt-2">
                  <button 
                    onClick={() => {
                      handleNavigateToResume();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-emerald-400 text-slate-900 rounded-xl px-4 py-3 font-medium hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Download size={16} />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-8">
            <div className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/20 mb-4 sm:mb-6 shadow-xl transition-all duration-700 ease-in-out transform ${
              isScrolled 
                ? 'opacity-30 scale-75 rotate-12' 
                : 'opacity-100 scale-100 rotate-0'
            }`}>
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-tight">
            <span className="font-extralight text-slate-400">Hello, I'm</span>
            <br />
            <span className="font-bold text-slate-900">{PERSONAL_INFO.name}</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-600 font-light px-4">
            {PERSONAL_INFO.title}
          </p>
          
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-slate-500 max-w-2xl mx-auto leading-relaxed px-4">
            {PERSONAL_INFO.description}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
            <div className="flex items-center space-x-2 text-slate-600 bg-slate-50 px-3 sm:px-4 py-2 rounded-full text-sm">
              <MapPin size={14} />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600 bg-slate-50 px-3 sm:px-4 py-2 rounded-full text-sm">
              <Award size={14} />
              <span>{PERSONAL_INFO.experience}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600 bg-slate-50 px-3 sm:px-4 py-2 rounded-full text-sm">
              <Eye size={14} />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-xl text-center"
            >
              Get In Touch
            </a>
            <button 
              onClick={handleNavigateToResume}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-slate-300 text-slate-700 rounded-full hover:border-slate-400 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:bg-slate-50 flex items-center justify-center space-x-2"
            >
              <Download size={18} />
              <span>View Resume</span>
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-emerald-300 text-emerald-700 rounded-full hover:border-emerald-400 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:bg-emerald-50"
            >
              View Work
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection('work')}
            className="text-slate-400 hover:text-slate-600 transition-all duration-300 animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Featured <span className="font-bold text-emerald-600">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
            
            {/* Project Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'web', label: 'Web Apps' },
                { id: 'mobile', label: 'Mobile Apps' },
                { id: 'desktop', label: 'Desktop Apps' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'bg-emerald-400 text-slate-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 sm:space-y-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-400/20 transition-all duration-700 transform hover:scale-[1.02] hover:ring-2 hover:ring-emerald-400/30 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
                onMouseEnter={() => setActiveCard(project.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Project Image Gallery */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    {/* Image Container */}
                    <div className="relative w-full h-full">
                      {project.images.map((image, imageIndex) => (
                        <img 
                          key={imageIndex}
                          src={image} 
                          alt={`${project.title} - Image ${imageIndex + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform ${
                            imageIndex === (currentImageIndex[project.id] || 0)
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-110'
                          } group-hover:scale-110`}
                        />
                      ))}
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.status}
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-mono shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.year}
                    </div>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-6 left-6 flex space-x-2">
                      {project.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          onClick={() => setCurrentImageIndex(prev => ({
                            ...prev,
                            [project.id]: imageIndex
                          }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            imageIndex === (currentImageIndex[project.id] || 0)
                              ? 'bg-emerald-400 w-6'
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setCurrentImageIndex(prev => ({
                        ...prev,
                        [project.id]: prev[project.id] === 0 
                          ? project.images.length - 1 
                          : (prev[project.id] || 0) - 1
                      }))}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => ({
                        ...prev,
                        [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
                      }))}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Category */}
                    <div className="inline-block">
                      <span className="text-sm text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a 
                        href={project.live}
                        className="flex items-center justify-center space-x-3 px-6 py-3 bg-emerald-400 text-slate-900 rounded-xl hover:bg-emerald-300 transition-all duration-300 font-semibold text-sm group-hover:shadow-lg transform hover:scale-105"
                        title="View Live Project"
                      >
                        <ExternalLink size={18} />
                        <span>View Live</span>
                      </a>
                      <a 
                        href={project.github}
                        className="flex items-center justify-center space-x-3 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 font-semibold text-sm transform hover:scale-105"
                        title="View Source Code"
                      >
                        <Github size={18} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/5 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Technical <span className="font-bold text-emerald-600">Expertise</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
              Specialized in modern web technologies with a focus on scalable, performance-optimized solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SKILLS_DATA.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-slate-50 p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400/20 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="text-xs text-emerald-600 font-medium mb-1">
                      {skill.proficiency}
                    </div>
                    <div className="text-xs text-slate-400">
                      {skill.experience}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {skill.technologies.slice(0, 3).map((tech) => (
                    <div key={tech} className="text-sm text-slate-600 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                      <span>{tech}</span>
                    </div>
                  ))}
                  {skill.technologies.length > 3 && (
                    <div className="text-xs text-slate-400">
                      +{skill.technologies.length - 3} more
                    </div>
                  )}
                </div>
                
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000"
                    style={{ 
                      width: skill.proficiency === 'Expert' ? '95%' : skill.proficiency === 'Advanced' ? '80%' : '65%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6 sm:mb-8">
                About <span className="font-bold text-emerald-600">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
              
              <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed">
                {ABOUT_TEXT.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base"}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">{ABOUT_STATS.projectsCompleted}</div>
                  <div className="text-xs sm:text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">{ABOUT_STATS.happyClients}</div>
                  <div className="text-xs sm:text-sm text-slate-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6 flex items-center space-x-2">
                  <Briefcase className="text-emerald-600" size={20} />
                  <span>Experience</span>
                </h3>
                
                {EXPERIENCE_DATA.map((exp, index) => (
                  <div key={exp.title} className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 last:pb-0">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-emerald-400 rounded-full shadow-lg"></div>
                    {index !== EXPERIENCE_DATA.length - 1 && (
                      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-slate-200"></div>
                    )}
                    
                    <div className="bg-slate-50 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-emerald-400/15 hover:ring-1 hover:ring-emerald-400/20 transition-all duration-300">
                      <div className="flex flex-col mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">{exp.title}</h4>
                        <span className="text-xs sm:text-sm text-slate-500 font-mono">{exp.period}</span>
                      </div>
                      
                      <div className="text-emerald-600 font-medium mb-2 text-sm sm:text-base">
                        <span>{exp.company}</span>
                        <span className="text-slate-300 mx-2">•</span>
                        <span className="text-slate-500 text-xs sm:text-sm">{exp.location}</span>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">{exp.description}</p>
                      
                      <div className="space-y-1 sm:space-y-2">
                        {exp.achievements.map((achievement) => (
                          <div key={achievement} className="text-xs sm:text-sm text-slate-600 flex items-start space-x-2">
                            <Star className="text-emerald-400 mt-0.5 flex-shrink-0" size={10} />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
              What People <span className="font-bold text-emerald-600">Say</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
              Testimonials from colleagues, clients, and team members I've had the pleasure to work with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-slate-50 p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-400/20 hover:ring-2 hover:ring-emerald-400/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-slate-500">{testimonial.position}</div>
                    <div className="text-xs text-emerald-600">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex text-emerald-400 mt-3 sm:mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8">
              Let's <span className="font-bold text-emerald-400">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
              {CONTACT_MESSAGES.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{CONTACT_MESSAGES.getInTouch}</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800 rounded-xl hover:bg-slate-700 hover:shadow-lg hover:shadow-emerald-400/20 hover:ring-1 hover:ring-emerald-400/30 transition-all duration-300 group"
                >
                  <div className="p-2 sm:p-3 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors duration-300">
                    <Mail className="text-emerald-400" size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Email</div>
                    <div className="text-slate-300 text-xs sm:text-sm">{PERSONAL_INFO.email}</div>
                  </div>
                </a>
                
                <a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800 rounded-xl hover:bg-slate-700 hover:shadow-lg hover:shadow-emerald-400/20 hover:ring-1 hover:ring-emerald-400/30 transition-all duration-300 group"
                >
                  <div className="p-2 sm:p-3 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors duration-300">
                    <Phone className="text-emerald-400" size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Phone</div>
                    <div className="text-slate-300 text-xs sm:text-sm">{PERSONAL_INFO.phoneDisplay}</div>
                  </div>
                </a>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800 rounded-xl">
                  <div className="p-2 sm:p-3 bg-emerald-400/10 rounded-full">
                    <MapPin className="text-emerald-400" size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Location</div>
                    <div className="text-slate-300 text-xs sm:text-sm">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{CONTACT_MESSAGES.quickMessage}</h3>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 sm:p-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-emerald-400 focus:outline-none text-white placeholder-slate-400 transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 sm:p-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-emerald-400 focus:outline-none text-white placeholder-slate-400 transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 sm:p-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-emerald-400 focus:outline-none text-white placeholder-slate-400 resize-none transition-colors duration-300 text-sm sm:text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-emerald-400 text-slate-900 rounded-xl hover:bg-emerald-300 transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-slate-700">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
            <button
              onClick={handleNavigateToResume}
              className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
              title="View Resume"
            >
              <Download size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
              {FOOTER_INFO.copyright}
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-400 text-xs sm:text-sm">
              <span>{FOOTER_INFO.tech}</span>
              <span className="hidden sm:inline">•</span>
              <span>{FOOTER_INFO.hosting}</span>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Portfolio;